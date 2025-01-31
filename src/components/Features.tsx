'use client';

import { motion } from 'framer-motion';
import { Wand2, Zap, Target, Sparkles, BarChart3, Share2 } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI-Powered Editing',
    description: 'Advanced algorithms automatically identify and extract the most engaging moments from your videos.',
  },
  {
    icon: Target,
    title: 'Smart Content Selection',
    description: 'Our AI analyzes viewer engagement patterns to select the most viral-worthy content segments.',
  },
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Generate multiple short-form videos in minutes, saving hours of manual editing time.',
  },
  {
    icon: Sparkles,
    title: 'Premium Effects',
    description: 'Automatically apply trending effects, transitions, and text overlays to maximize engagement.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track your shorts performance with detailed analytics and AI-powered recommendations.',
  },
  {
    icon: Share2,
    title: 'Multi-Platform Export',
    description: 'Export your shorts in optimal formats for TikTok, Instagram Reels, YouTube Shorts, and more.',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="features">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[rgb(var(--premium-purple))/5] to-black/0" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Powered by Advanced <span className="text-gradient">AI Technology</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our cutting-edge features combine artificial intelligence with professional video editing techniques to deliver exceptional results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full premium-card relative overflow-hidden">
                {/* Card Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                {/* Card Content */}
                <div className="relative p-8 space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] p-[1px] group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}