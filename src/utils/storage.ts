import { 
  S3Client, 
  PutObjectCommand, 
  GetObjectCommand,
  DeleteObjectCommand,
  HeadObjectCommand,
  ListObjectsV2Command,
  S3ServiceException
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

interface StorageConfig {
  region: string;
  bucket: string;
  prefix?: string;
  maxRetries?: number;
  timeout?: number;
  maxFileSize?: number;
}

interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
  speed: number;
  remainingTime: number;
}

interface VideoMetadata {
  key: string;
  originalName: string;
  size: number;
  contentType: string;
  lastModified: Date;
  duration?: number;
  resolution?: {
    width: number;
    height: number;
  };
  uploadDate: string;
  url: string;
  tags?: string[];
}

export class StorageService {
  private s3Client: S3Client;
  private bucket: string;
  private prefix: string;
  private readonly config: Required<StorageConfig>;
  private progressCallback?: (progress: UploadProgress) => void;
  private readonly validVideoTypes = [
    'video/mp4',
    'video/webm',
    'video/quicktime',
    'video/x-msvideo',
    'video/x-matroska'
  ];

  constructor(config: StorageConfig) {
    this.config = {
      region: config.region,
      bucket: config.bucket,
      prefix: config.prefix || '',
      maxRetries: config.maxRetries || 3,
      timeout: config.timeout || 30000,
      maxFileSize: config.maxFileSize || 1024 * 1024 * 1024, // 1GB default
    };

    this.s3Client = new S3Client({ 
      region: this.config.region,
      maxAttempts: this.config.maxRetries,
      requestHandler: {
        abortSignal: AbortSignal.timeout(this.config.timeout),
      },
    });

    this.bucket = this.config.bucket;
    this.prefix = this.config.prefix;
  }

  setProgressCallback(callback: (progress: UploadProgress) => void): void {
    this.progressCallback = callback;
  }

  private getFullKey(key: string): string {
    return this.prefix ? `${this.prefix}/${key}`.replace(/\/+/g, '/') : key;
  }

  private async retryOperation<T>(
    operation: () => Promise<T>, 
    maxRetries = this.config.maxRetries
  ): Promise<T> {
    let lastError: Error | null = null;
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;
        if (error instanceof S3ServiceException) {
          if (error.name === 'NoSuchBucket') {
            throw error; // Don't retry if bucket doesn't exist
          }
        }
        
        if (i < maxRetries - 1) {
          const delay = Math.min(Math.pow(2, i) * 1000, 10000);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
      }
    }
    
    throw lastError || new Error('Operation failed after retries');
  }

  private validateVideoContentType(file: File): void {
    if (!this.validVideoTypes.includes(file.type)) {
      throw new Error(
        `Invalid file type. Supported types: ${this.validVideoTypes.join(', ')}`
      );
    }
  }

  private validateFileSize(file: File): void {
    if (file.size > this.config.maxFileSize) {
      throw new Error(
        `File size (${(file.size / (1024 * 1024)).toFixed(2)}MB) exceeds maximum allowed size of ${(this.config.maxFileSize / (1024 * 1024)).toFixed(2)}MB`
      );
    }
  }

  async uploadVideo(file: File, key: string): Promise<VideoMetadata> {
    this.validateVideoContentType(file);
    this.validateFileSize(file);

    const fullKey = this.getFullKey(key);

    try {
      await this.retryOperation(async () => {
        const command = new PutObjectCommand({
          Bucket: this.bucket,
          Key: fullKey,
          Body: file,
          ContentType: file.type,
          Metadata: {
            originalName: file.name,
            uploadDate: new Date().toISOString(),
          },
        });

        return await this.s3Client.send(command);
      });

      // Generate signed URL for the uploaded video
      const url = await this.getSignedUrl(fullKey, 3600); // 1 hour expiry

      return {
        key: fullKey,
        originalName: file.name,
        size: file.size,
        contentType: file.type,
        lastModified: new Date(),
        uploadDate: new Date().toISOString(),
        url,
      };

    } catch (error) {
      console.error('Error uploading video:', error);
      throw new Error(
        'Failed to upload video: ' + 
        (error instanceof Error ? error.message : String(error))
      );
    }
  }

  async downloadVideo(key: string): Promise<Blob> {
    const fullKey = this.getFullKey(key);

    try {
      const response = await this.retryOperation(async () => {
        const command = new GetObjectCommand({
          Bucket: this.bucket,
          Key: fullKey,
        });

        return await this.s3Client.send(command);
      });

      if (!response.Body) {
        throw new Error('Empty response body');
      }

      const chunks: Uint8Array[] = [];
      const stream = response.Body as ReadableStream;
      const reader = stream.getReader();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
      }

      const blob = new Blob(chunks, { type: response.ContentType });
      return blob;

    } catch (error) {
      console.error('Error downloading video:', error);
      throw new Error(
        'Failed to download video: ' + 
        (error instanceof Error ? error.message : String(error))
      );
    }
  }

  async deleteVideo(key: string): Promise<void> {
    const fullKey = this.getFullKey(key);

    try {
      await this.retryOperation(async () => {
        const command = new DeleteObjectCommand({
          Bucket: this.bucket,
          Key: fullKey,
        });

        return await this.s3Client.send(command);
      });
    } catch (error) {
      console.error('Error deleting video:', error);
      throw new Error(
        'Failed to delete video: ' + 
        (error instanceof Error ? error.message : String(error))
      );
    }
  }

  async getVideoMetadata(key: string): Promise<VideoMetadata> {
    const fullKey = this.getFullKey(key);

    try {
      const headResponse = await this.retryOperation(async () => {
        const command = new HeadObjectCommand({
          Bucket: this.bucket,
          Key: fullKey,
        });

        return await this.s3Client.send(command);
      });

      const url = await this.getSignedUrl(fullKey, 3600);

      return {
        key: fullKey,
        originalName: headResponse.Metadata?.originalname || '',
        size: headResponse.ContentLength || 0,
        contentType: headResponse.ContentType || '',
        lastModified: headResponse.LastModified || new Date(),
        uploadDate: headResponse.Metadata?.uploaddate || new Date().toISOString(),
        url,
      };

    } catch (error) {
      console.error('Error getting video metadata:', error);
      throw new Error(
        'Failed to get video metadata: ' + 
        (error instanceof Error ? error.message : String(error))
      );
    }
  }

  async listVideos(prefix?: string): Promise<VideoMetadata[]> {
    const listPrefix = prefix ? this.getFullKey(prefix) : this.prefix;

    try {
      const response = await this.retryOperation(async () => {
        const command = new ListObjectsV2Command({
          Bucket: this.bucket,
          Prefix: listPrefix,
        });

        return await this.s3Client.send(command);
      });

      if (!response.Contents) {
        return [];
      }

      const videos = await Promise.all(
        response.Contents
          .filter(item => item.Key && item.Key.match(/\.(mp4|webm|mov|avi|mkv)$/i))
          .map(async item => {
            if (!item.Key) throw new Error('Invalid key in response');
            return await this.getVideoMetadata(item.Key);
          })
      );

      return videos;

    } catch (error) {
      console.error('Error listing videos:', error);
      throw new Error(
        'Failed to list videos: ' + 
        (error instanceof Error ? error.message : String(error))
      );
    }
  }

  private async getSignedUrl(key: string, expiresIn: number): Promise<string> {
    try {
      const command = new GetObjectCommand({
        Bucket: this.bucket,
        Key: key,
      });

      return await getSignedUrl(this.s3Client, command, { expiresIn });
    } catch (error) {
      console.error('Error generating signed URL:', error);
      throw new Error(
        'Failed to generate signed URL: ' + 
        (error instanceof Error ? error.message : String(error))
      );
    }
  }
}