'use client';

import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

interface ProcessingOptions {
  width?: number;
  height?: number;
  addWatermark?: boolean;
  text?: string;
  quality?: 'high' | 'medium' | 'low';
  format?: 'mp4' | 'webm';
  fps?: number;
  audioQuality?: 1 | 2 | 3 | 4 | 5;
  filters?: {
    brightness?: number; // -1.0 to 1.0
    contrast?: number; // -1.0 to 1.0
    saturation?: number; // 0.0 to 3.0
  };
}

interface ProcessingProgress {
  stage: 'initializing' | 'processing' | 'finalizing';
  percent: number;
  currentTask: string;
}

type FFmpegLogCallback = (message: { type: string; message: string }) => void;

export class VideoProcessor {
  private static instance: VideoProcessor;
  private ffmpeg: FFmpeg | null = null;
  private isLoaded = false;
  private isLoading = false;
  private progressCallback?: (progress: ProcessingProgress) => void;
  private readonly maxFileSize = 1024 * 1024 * 1024; // 1GB
  private readonly supportedFormats = ['mp4', 'webm', 'mov', 'avi'];
  private readonly maxDuration = 600; // 10 minutes

  private constructor() {
    this.ffmpeg = new FFmpeg();
    this.setupFFmpegLogger();
  }

  static getInstance(): VideoProcessor {
    if (!VideoProcessor.instance) {
      VideoProcessor.instance = new VideoProcessor();
    }
    return VideoProcessor.instance;
  }

  setProgressCallback(callback: (progress: ProcessingProgress) => void): void {
    this.progressCallback = callback;
  }

  private setupFFmpegLogger(): void {
    if (!this.ffmpeg) return;

    const logCallback: FFmpegLogCallback = ({ type, message }) => {
      if (type === 'fferr') {
        console.error('[FFmpeg Error]:', message);
      } else if (process.env.NODE_ENV === 'development') {
        console.log(`[FFmpeg ${type}]:`, message);
      }
    };

    this.ffmpeg.on('log', logCallback);
  }

  private updateProgress(stage: ProcessingProgress['stage'], percent: number, currentTask: string): void {
    this.progressCallback?.({
      stage,
      percent: Math.min(100, Math.max(0, percent)),
      currentTask,
    });
  }

  private validateInput(file: File): void {
    if (file.size > this.maxFileSize) {
      throw new Error(`File size exceeds maximum limit of ${this.maxFileSize / (1024 * 1024)}MB`);
    }

    const fileExtension = this.getFileExtension(file.name).toLowerCase().replace('.', '');
    if (!this.supportedFormats.includes(fileExtension)) {
      throw new Error(`Unsupported file format. Supported formats: ${this.supportedFormats.join(', ')}`);
    }
  }

  private getFileExtension(filename: string): string {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
  }

  async load(): Promise<void> {
    if (this.isLoaded) return;
    if (this.isLoading) {
      await new Promise(resolve => setTimeout(resolve, 100));
      return this.load();
    }

    try {
      this.isLoading = true;
      const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
      
      if (!this.ffmpeg) {
        throw new Error('FFmpeg not initialized');
      }

      await this.ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      });
      
      this.isLoaded = true;
    } catch (error) {
      console.error('Failed to load FFmpeg:', error);
      throw new Error('Failed to load FFmpeg: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      this.isLoading = false;
    }
  }

  async generateShort(
    inputVideo: File,
    startTime: number,
    duration: number,
    options: ProcessingOptions = {}
  ): Promise<Blob> {
    if (!this.ffmpeg) throw new Error('FFmpeg not initialized');
    
    this.validateInput(inputVideo);
    if (duration > this.maxDuration) {
      throw new Error(`Duration exceeds maximum limit of ${this.maxDuration} seconds`);
    }

    const tempFiles: string[] = [];
    try {
      this.updateProgress('initializing', 0, 'Loading FFmpeg...');
      await this.load();
      this.updateProgress('initializing', 20, 'Processing input file...');

      const inputFileName = `input.${this.getFileExtension(inputVideo.name)}`;
      const outputFileName = `output.${options.format || 'mp4'}`;
      tempFiles.push(inputFileName, outputFileName);

      await this.ffmpeg.writeFile(inputFileName, await fetchFile(inputVideo));
      this.updateProgress('processing', 40, 'Applying video effects...');

      const filters: string[] = [];
      if (options.filters) {
        if (typeof options.filters.brightness === 'number') {
          filters.push(`eq=brightness=${options.filters.brightness}`);
        }
        if (typeof options.filters.contrast === 'number') {
          filters.push(`eq=contrast=${options.filters.contrast}`);
        }
        if (typeof options.filters.saturation === 'number') {
          filters.push(`eq=saturation=${options.filters.saturation}`);
        }
      }

      const command = [
        '-i', inputFileName,
        '-ss', startTime.toString(),
        '-t', duration.toString(),
      ];

      if (options.width && options.height) {
        command.push('-vf', `scale=${options.width}:${options.height}`);
      }

      if (filters.length > 0) {
        command.push('-vf', filters.join(','));
      }

      if (options.fps) {
        command.push('-r', options.fps.toString());
      }

      if (options.audioQuality) {
        command.push('-q:a', options.audioQuality.toString());
      }

      const qualityPresets = {
        high: { crf: '18', preset: 'slow' },
        medium: { crf: '23', preset: 'medium' },
        low: { crf: '28', preset: 'fast' },
      };

      const quality = options.quality || 'medium';
      command.push(
        '-crf', qualityPresets[quality].crf,
        '-preset', qualityPresets[quality].preset,
        outputFileName
      );

      this.updateProgress('processing', 60, 'Encoding video...');
      await this.ffmpeg.exec(command);

      this.updateProgress('finalizing', 80, 'Preparing output...');
      const data = await this.ffmpeg.readFile(outputFileName);
      
      this.updateProgress('finalizing', 100, 'Complete');
      return new Blob([data], { type: `video/${options.format || 'mp4'}` });

    } catch (error) {
      console.error('Error processing video:', error);
      throw new Error('Failed to process video: ' + (error instanceof Error ? error.message : String(error)));

    } finally {
      // Cleanup temp files
      for (const file of tempFiles) {
        try {
          await this.ffmpeg?.deleteFile(file);
        } catch (error) {
          console.warn(`Failed to delete temporary file ${file}:`, error);
        }
      }
    }
  }

  async cleanup(): Promise<void> {
    try {
      if (this.ffmpeg) {
        await this.ffmpeg.terminate();
        this.ffmpeg = null;
        this.isLoaded = false;
      }
    } catch (error) {
      console.error('Error during cleanup:', error);
    }
  }
}