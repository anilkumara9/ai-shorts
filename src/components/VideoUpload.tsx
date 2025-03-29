'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { Upload, FileVideo, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

export default function VideoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.mkv']
    },
    maxFiles: 1,
    multiple: false,
  });

  const removeFile = () => setFile(null);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        {/* Upload Area */}
        <motion.div
          {...(getRootProps() as HTMLMotionProps<"div">)}
          className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
            isDragActive ? 'scale-105' : 'scale-100'
          }`}
          whileHover={{ scale: 1.02 }}
          onDragEnter={() => setIsDragActive(true)}
          onDragLeave={() => setIsDragActive(false)}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-[0.02]" />
          <div className="absolute inset-0 backdrop-blur-xl bg-black/40" />
          
          {/* Border Gradient */}
          <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-25" />

          {/* Content */}
          <div className="relative p-8 text-center">
            <input {...getInputProps()} />
            
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
              animate={{
                scale: isDragActive ? 1.1 : 1,
                borderColor: isDragActive ? 'rgba(var(--premium-purple), 0.5)' : 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <Upload className="w-8 h-8 text-white/60" />
            </motion.div>

            <h3 className="text-xl font-semibold mb-2">
              {isDragReject ? (
                <span className="text-red-400">Unsupported File Type</span>
              ) : (
                'Drop your video here'
              )}
            </h3>
            <p className="text-white/60 mb-4">
              or click to browse your files
            </p>
            <p className="text-sm text-white/40">
              Supports MP4, MOV, AVI, MKV up to 2GB
            </p>
          </div>
        </motion.div>

        {/* Selected File Preview */}
        <AnimatePresence>
          {file && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6 relative overflow-hidden rounded-xl"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
              
              {/* Content */}
              <div className="relative p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <FileVideo className="w-6 h-6 text-white/60" />
                </div>
                
                <div className="flex-grow min-w-0">
                  <h4 className="text-white font-medium truncate">{file.name}</h4>
                  <p className="text-sm text-white/40">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>

                <motion.button
                  onClick={removeFile}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Upload Button */}
        <AnimatePresence>
          {file && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6 w-full px-6 py-3 rounded-full bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] text-white font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Processing
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}