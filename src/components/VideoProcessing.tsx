'use client';

import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

export default function VideoProcessing() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative max-w-md w-full mx-4"
      >
        <div className="premium-card p-8 text-center space-y-6">
          {/* Icon */}
          <div className="relative w-20 h-20 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative h-full rounded-2xl bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10">
              <Wand2 className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gradient">Processing Video</h3>
            <p className="text-white/60">
              Our AI is analyzing your video and creating engaging shorts. This may take a few minutes.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>

          {/* Processing Steps */}
          <div className="space-y-3 text-sm text-left">
            {[
              'Analyzing video content...',
              'Identifying key moments...',
              'Generating short clips...',
              'Applying enhancements...',
            ].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))]" />
                <span className="text-white/80">{step}</span>
              </motion.div>
            ))}
          </div>

          {/* Cancel Button */}
          <motion.button
            className="px-6 py-2 rounded-full border border-white/10 text-white/60 hover:text-white/80 hover:bg-white/5 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel Process
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
} 