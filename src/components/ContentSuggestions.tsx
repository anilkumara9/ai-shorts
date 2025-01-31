'use client'

import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Target, Sparkles } from 'lucide-react';

const suggestions = [
  {
    icon: TrendingUp,
    title: 'Trending Topics',
    description: 'AI-powered analysis of current trends and viral content patterns to guide your content strategy.',
  },
  {
    icon: Target,
    title: 'Audience Insights',
    description: 'Deep understanding of your audience preferences and engagement patterns across platforms.',
  },
  {
    icon: Lightbulb,
    title: 'Content Ideas',
    description: 'Smart suggestions for new content based on your existing videos and audience interests.',
  },
  {
    icon: Sparkles,
    title: 'Optimization Tips',
    description: 'Real-time recommendations to enhance your content for maximum engagement and reach.',
  },
];

export default function ContentSuggestions() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[rgb(var(--premium-purple))/5] to-black/0" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-[rgb(var(--premium-gold))]" />
            <span className="text-white/60">AI-Powered Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Smart <span className="text-gradient">Content Suggestions</span>
          </h2>
          <p className="text-lg text-white/60">
            Let our AI help you create content that resonates with your audience and drives engagement.
          </p>
        </motion.div>

        {/* Suggestions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {suggestions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl overflow-hidden h-full">
                {/* Card Background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] p-[1px] group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Suggestions Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 relative rounded-2xl overflow-hidden"
        >
          {/* Preview Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-10" />
          <div className="absolute inset-0 backdrop-blur-xl bg-black/40" />

          {/* Preview Content */}
          <div className="relative p-8 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">
              See AI Suggestions in Action
            </h3>
            <p className="text-white/60 mb-6 max-w-2xl">
              Experience how our AI analyzes your content and provides real-time suggestions for improvement.
            </p>
            <motion.button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

