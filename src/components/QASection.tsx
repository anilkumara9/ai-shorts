'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How does the AI content creation work?',
    answer: 'Our advanced AI analyzes trending content patterns and user engagement metrics to help create highly engaging content. It uses machine learning algorithms to understand what resonates with your target audience and provides creative suggestions for maximum impact.',
    icon: HelpCircle,
  },
  {
    question: 'What type of content can I create?',
    answer: 'You can create a wide variety of content including social media posts, short-form content, engaging stories, and viral-worthy content optimized for platforms like TikTok, Instagram Reels, and YouTube Shorts.',
    icon: HelpCircle,
  },
  {
    question: 'How long does the creation process take?',
    answer: 'Most content pieces are generated within minutes. Our AI provides instant creative suggestions, and you can customize and refine them to match your style. The entire process is designed to be quick and efficient.',
    icon: HelpCircle,
  },
  {
    question: 'Can I customize the generated content?',
    answer: 'Absolutely! You have full creative control over all generated content. Our AI provides suggestions and templates, but you can modify every aspect including style, tone, effects, and transitions to match your brand voice.',
    icon: HelpCircle,
  },
  {
    question: 'Which platforms are supported?',
    answer: 'We support all major social media platforms including TikTok, Instagram Reels, YouTube Shorts, and Facebook. Each piece of content is optimized for the specific platform requirements and best practices.',
    icon: HelpCircle,
  },
  {
    question: 'What about the pricing plans?',
    answer: 'We offer flexible pricing plans to suit different needs. The Starter plan is perfect for individuals, the Pro plan for growing creators, and Enterprise plans for larger teams. All plans include our core AI features.',
    icon: HelpCircle,
  },
]

export default function QASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[rgb(var(--premium-purple))/5] to-black/0 opacity-50" />
      <div className="absolute inset-0 bg-noise opacity-10" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4 backdrop-blur-sm shadow-lg">
            <MessageCircle className="w-4 h-4 text-[rgb(var(--premium-gold))] animate-pulse" />
            <span className="text-sm text-white/80">Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))]">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Everything you need to know about our AI-powered content creation platform, designed to empower your creative journey.
          </p>
        </motion.div>

        {/* FAQ Items with Enhanced Interaction */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <motion.button
                className="w-full text-left px-6 py-4 rounded-2xl 
                  bg-white/5 hover:bg-white/10 
                  backdrop-blur-sm border border-white/10 
                  transition-all duration-300 
                  group-hover:shadow-[0_0_15px_rgba(var(--premium-purple),0.2)]
                  group-hover:border-[rgb(var(--premium-purple))]/30"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <faq.icon className="w-6 h-6 text-[rgb(var(--premium-gold))] opacity-60" />
                    <h3 className="font-medium pr-8 text-white/90">{faq.question}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-[rgb(var(--premium-gold))]" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pl-10 border-l-2 border-[rgb(var(--premium-purple))]/30">
                        <p className="text-white/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
