'use client'

import { motion } from 'framer-motion'
import { Link2, Upload, Send } from 'lucide-react'
import { useState } from 'react'

const EnhancedHero = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [message, setMessage] = useState('')

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent opacity-30" />
      <motion.div
        className="container mx-auto relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-6xl md:text-7xl xl:text-8xl font-bold text-center mb-6 title-gradient"
          variants={item}
        >
          Transform Your Content
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-5xl xl:text-6xl font-bold text-center mb-6 gradient-text bg-gradient-to-r from-purple-400 to-pink-600"
          variants={item}
        >
          Into Viral Shorts
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-center mb-12 text-gray-300 max-w-3xl mx-auto"
          variants={item}
        >
          Harness the power of AI to convert your long-form videos into engaging, shareable shorts that captivate your audience.
        </motion.p>

        <motion.div
          className="max-w-4xl mx-auto premium-card rounded-2xl p-8 neon-border"
          variants={item}
          whileHover={{
            scale: 1.02,
            boxShadow: '0 0 20px rgba(255, 0, 222, 0.7)',
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Paste your video link here"
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/30 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              />
              <Link2 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex gap-2">
              <button className="px-6 py-3 advanced-gradient rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center gap-2 pixel-corners">
                Create Shorts
              </button>
              <button className="px-6 py-3 bg-gray-800 rounded-xl font-medium hover:bg-gray-700 transition-colors flex items-center gap-2 pixel-corners">
                <Upload size={20} />
                Upload
              </button>
            </div>
          </div>
          <div className="bg-black/30 rounded-xl p-4 pixel-corners">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="h-40 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
              <div className="flex flex-col gap-2">
                <div className="bg-purple-500/20 rounded-lg p-2 self-start max-w-[80%]">
                  How can I create viral shorts?
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 self-end max-w-[80%]">
                  To create viral shorts, focus on trending topics, use eye-catching visuals, and keep your content concise and engaging. Our AI can help you identify the most compelling parts of your videos to use in shorts.
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask about creating viral shorts..."
                className="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="px-4 py-2 advanced-gradient rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => setMessage('')}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 relative"
          variants={item}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="relative max-w-5xl mx-auto">
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-48 bg-black rounded-xl overflow-hidden border-2 border-purple-500/30 pixel-corners neon-border"
              animate={{
                y: isHovered ? -20 : 0,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/placeholder.svg?height=192&width=256"
                alt="Original video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            <motion.div
              className="flex justify-center gap-8 mb-8"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  className="w-1 h-32 advanced-gradient"
                  initial={{ height: 0 }}
                  animate={{ height: 128 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </motion.div>

            <div className="flex justify-center gap-8">
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  className="w-40 h-72 bg-black rounded-3xl overflow-hidden border-2 border-purple-500/30 pixel-corners neon-border"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  <img
                    src="/placeholder.svg?height=288&width=160"
                    alt={`Short ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default EnhancedHero

