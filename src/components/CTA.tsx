'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[rgb(var(--premium-purple))/5] to-black/0" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-10" />
          
          {/* Glass Effect */}
          <div className="absolute inset-0 backdrop-blur-xl bg-black/40" />

          {/* Content */}
          <div className="relative p-12 md:p-20">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-[rgb(var(--premium-gold))]" />
                <span className="text-sm font-medium text-white/80">Limited Time Offer</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                Start Creating <br />
                <span className="text-gradient">Viral Shorts Today</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/60 max-w-2xl mx-auto"
              >
                Join thousands of content creators who are transforming their long-form videos into engaging shorts. Get started with our 14-day free trial.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* Primary Button */}
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] text-white font-medium flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>

                {/* Secondary Button */}
                <motion.button
                  className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium flex items-center justify-center gap-2 group hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-4 h-4" />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Trust Badge */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-sm text-white/40"
              >
                No credit card required • 14-day free trial • Cancel anytime
              </motion.p>
            </div>
          </div>

          {/* Decorative Elements */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-20 blur-3xl"
              style={{
                top: `${20 + i * 30}%`,
                left: `${-10 + i * 50}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

