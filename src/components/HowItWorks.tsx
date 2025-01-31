'use client';

import { motion } from 'framer-motion';
import { Upload, Wand2, Share2, Sparkles, Link } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Video',
    description: 'Simply upload your long-form video content to our platform. We support various formats and high-quality videos.',
  },
  {
    icon: Wand2,
    title: 'AI Processing',
    description: 'Our advanced AI analyzes your content, identifies key moments, and generates engaging short-form clips.',
  },
  {
    icon: Sparkles,
    title: 'Enhancement',
    description: 'We automatically enhance your shorts with captions, effects, and optimizations for maximum engagement.',
  },
  {
    icon: Share2,
    title: 'Share & Grow',
    description: 'Export your shorts in perfect formats for TikTok, Instagram Reels, YouTube Shorts, and more.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-lg text-white/60">
            Transform your content in four simple steps. Our AI-powered platform makes it easy to create viral-worthy shorts.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Black Chain Connector */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {steps.slice(0, -1).map((_, index) => (
              <div 
                key={`chain-${index}`}
                className="absolute top-1/2 left-0 right-0 flex items-center justify-between"
                style={{ 
                  transform: `translateY(-50%)`, 
                  paddingLeft: `${(index * 25) + 12.5}%`, 
                  paddingRight: `${((steps.length - index - 1) * 25) + 12.5}%` 
                }}
              >
                <div className="flex items-center">
                  <div className="w-4 h-1 bg-black/50 mr-2"></div>
                  <Link className="w-4 h-4 text-black/30" />
                  <div className="w-4 h-1 bg-black/50 ml-2"></div>
                </div>
              </div>
            ))}
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative z-10"
            >
              {/* Card */}
              <div className="relative p-6 rounded-2xl overflow-hidden">
                {/* Card Background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Step Number */}
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium mb-4">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] p-[1px] group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}  