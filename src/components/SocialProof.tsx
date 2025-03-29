'use client'

import { motion } from 'framer-motion'
import { Star, TrendingUp, Users, Award } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Active Users',
    description: 'Creators trust our platform',
  },
  {
    icon: TrendingUp,
    value: '10M+',
    label: 'Videos Generated',
    description: 'Viral shorts created',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'User Rating',
    description: 'Based on 10K+ reviews',
  },
  {
    icon: Award,
    value: '#1',
    label: 'AI Video Platform',
    description: 'Industry leading technology',
  },
]

const logos = [
  { src: '/logos/youtube.svg', alt: 'YouTube Logo', size: 'large' },
  { src: '/logos/tiktok.svg', alt: 'TikTok Logo', size: 'large' },
  { src: '/logos/instagram.svg', alt: 'Instagram Logo', size: 'large' },
  { src: '/logos/threads.svg', alt: 'Threads Logo', size: 'large' },
  { src: '/logos/twitter.svg', alt: 'Twitter Logo', size: 'large' },
  { src: '/logos/facebook.svg', alt: 'Facebook Logo', size: 'large' },
  { src: '/logos/twitch.svg', alt: 'Twitch Logo', size: 'large' },
  { src: '/logos/discord.svg', alt: 'Discord Logo', size: 'large' },
  { src: '/logos/pinterest.svg', alt: 'Pinterest Logo', size: 'large' },
  { src: '/logos/telegram.svg', alt: 'Telegram Logo', size: 'large' },
  { src: '/logos/linkedin.svg', alt: 'LinkedIn Logo', size: 'large' },
  { src: '/logos/snapchat.svg', alt: 'Snapchat Logo', size: 'large' },
].map(logo => ({
  ...logo,
  size: 'large' // Make all logos same size
}))

export default function SocialProof() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[rgb(var(--premium-purple))/5] to-black/0" />
      
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={stat.label} className="group">
              <div className="relative p-6 rounded-2xl overflow-hidden">
                {/* Card Background with animated gradient */}
                <motion.div 
                  className="absolute inset-0 bg-white/5 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] p-[1px]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Stats with fade up animation */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-medium text-white mb-2">
                      {stat.label}
                    </p>
                    <p className="text-sm text-white/60">
                      {stat.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Logos Section */}
        <div className="relative mt-32">
          {/* Premium Background Effects */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-64 bg-gradient-to-r from-[rgb(var(--premium-purple))] via-transparent to-[rgb(var(--premium-gold))] opacity-5 blur-3xl" />
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Premium Heading */}
            <div className="text-center space-y-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] p-[1px] rounded-2xl">
                  <div className="bg-black px-6 py-2 rounded-2xl">
                    <p className="text-white/60 font-medium">Seamless Integration</p>
                  </div>
                </div>
              </motion.div>
              
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Export to Major Platforms
              </h3>
            </div>

            {/* Two-Row Logo Animation */}
            <div className="relative w-full overflow-hidden h-64">
              {/* First Row - Left to Right */}
              <motion.div
                className="flex space-x-16 absolute"
                initial={{ x: -3000 }}
                animate={{ x: 0 }}
                transition={{
                  x: {
                    duration: 40, // Increased duration
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }
                }}
              >
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <motion.div
                    key={`${logo.src}-${index}`}
                    className="relative group flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2,
                      y: -10,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    {/* Enhanced Glow Effect */}
                    <motion.div 
                      className="absolute -inset-4 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] rounded-full opacity-0 group-hover:opacity-40 blur-xl"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Logo Container */}
                    <div className="relative w-24 h-24 rounded-2xl bg-black/30 backdrop-blur-xl p-4 border border-white/10 transition-all duration-300 group-hover:bg-black/50 group-hover:border-white/20">
                      <motion.div
                        initial={{ opacity: 0.7 }}
                        whileHover={{ 
                          scale: 1.1,
                          opacity: 1,
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full h-full object-contain drop-shadow-2xl"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Second Row - Right to Left */}
              <motion.div
                className="flex space-x-16 absolute top-32"
                initial={{ x: 0 }}
                animate={{ x: -3000 }}
                transition={{
                  x: {
                    duration: 40, // Increased duration
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }
                }}
              >
                {[...logos, ...logos, ...logos].reverse().map((logo, index) => (
                  <motion.div
                    key={`${logo.src}-${index}`}
                    className="relative group flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2,
                      y: -10,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    {/* Enhanced Glow Effect */}
                    <motion.div 
                      className="absolute -inset-4 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] rounded-full opacity-0 group-hover:opacity-40 blur-xl"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Logo Container */}
                    <div className="relative w-24 h-24 rounded-2xl bg-black/30 backdrop-blur-xl p-4 border border-white/10 transition-all duration-300 group-hover:bg-black/50 group-hover:border-white/20">
                      <motion.div
                        initial={{ opacity: 0.7 }}
                        whileHover={{ 
                          scale: 1.1,
                          opacity: 1,
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.img
                          src={logo.src}
                          alt={logo.alt}
                          className="w-full h-full object-contain drop-shadow-2xl"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

