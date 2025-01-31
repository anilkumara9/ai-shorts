'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgb(var(--premium-purple))] opacity-[0.15] blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[rgb(var(--premium-gold))] opacity-[0.1] blur-[120px] rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] bg-clip-text text-transparent px-4 py-2 rounded-full border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[rgb(var(--premium-gold))]" />
            <span className="text-sm font-medium">AI-Powered Content Creation</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6"
          >
            Create Engaging Content
            <span className="block mt-2 bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] bg-clip-text">
              That Goes Viral
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Leverage advanced AI to create engaging content optimized for TikTok, Reels, and YouTube Shorts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] text-white font-medium hover:shadow-lg hover:shadow-[rgb(var(--premium-purple))]/20 transition-all duration-300 flex items-center gap-2 group">
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-medium transition-all duration-300">
              Learn More
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: '10M+', label: 'Content Created' },
              { value: '98%', label: 'Success Rate' },
              { value: '5x', label: 'Engagement Boost' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
