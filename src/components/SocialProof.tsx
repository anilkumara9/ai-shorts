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
  '/logos/youtube.svg',
  '/logos/tiktok.svg',
  '/logos/instagram.svg',
  '/logos/snapchat.svg',
  '/logos/facebook.svg',
]

export default function SocialProof() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[rgb(var(--premium-purple))/5] to-black/0" />
      
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl overflow-hidden">
                {/* Card Background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] p-[1px] group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div>
                    <h3 className="text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-medium text-white mb-2">
                      {stat.label}
                    </p>
                    <p className="text-sm text-white/60">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos Section */}
        <div className="text-center space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/60"
          >
            Export your shorts to all major platforms
          </motion.p>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((logo, index) => (
              <motion.img
                key={logo}
                src={logo}
                alt="Platform Logo"
                className="h-8 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

