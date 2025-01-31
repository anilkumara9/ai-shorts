'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, SkipForward, Maximize2, Volume2 } from 'lucide-react'

export default function InteractiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden">
      {/* Video Container */}
      <div className="absolute inset-0">
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-10" />
        
        {/* Video Placeholder */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Video Controls */}
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        {/* Progress Bar */}
        <div className="relative h-1 mb-4 bg-white/20 rounded-full overflow-hidden cursor-pointer group">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))]"
            animate={{ width: `${currentTime}%` }}
            transition={{ duration: 0.1 }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ left: `${currentTime}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/Pause Button */}
            <motion.button
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setIsPlaying(!isPlaying)
                // Simulate progress
                if (!isPlaying) {
                  const interval = setInterval(() => {
                    setCurrentTime(prev => {
                      if (prev >= 100) {
                        clearInterval(interval)
                        setIsPlaying(false)
                        return 0
                      }
                      return prev + 1
                    })
                  }, 100)
                }
              }}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </motion.button>

            {/* Skip Button */}
            <motion.button
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SkipForward className="w-5 h-5" />
            </motion.button>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-white/60" />
              <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-white/60" />
              </div>
            </div>
          </div>

          {/* Right Controls */}
          <motion.button
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Maximize2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Center Play Button (when paused) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            onClick={() => setIsPlaying(true)}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] blur-xl opacity-50" />
              
              {/* Button */}
              <motion.div
                className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] p-[1px]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-8 h-8" />
                </div>
              </motion.div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

