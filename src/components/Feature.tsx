'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Video, Wand2, Share2, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Smart Video Processing',
    description: 'Our AI analyzes your videos to identify the most engaging moments.',
  },
  {
    icon: Wand2,
    title: 'One-Click Shorts',
    description: 'Generate multiple short-form videos with a single click.',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your shorts directly to popular social media platforms.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track the performance of your shorts across different platforms.',
  },
]

const Features = () => {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section ref={ref} id="features" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
      <div className="container mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 title-gradient">
          Key Features
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="premium-card rounded-lg p-6 hover:bg-gray-900/50 transition-all duration-300 pixel-corners"
              variants={itemVariants}
            >
              <feature.icon className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2 gradient-text bg-gradient-to-r from-purple-400 to-pink-600">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features

