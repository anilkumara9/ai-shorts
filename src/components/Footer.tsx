'use client';

import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube, Github, Mail, ArrowRight, Send } from 'lucide-react';

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
  ],
  social: [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-black">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[rgb(var(--premium-purple))/10] to-black/0 pointer-events-none" />
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }} 
      />

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 relative z-10">
        {/* Newsletter Section with Enhanced Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] via-[rgb(var(--premium-gold))] to-[rgb(var(--premium-purple))] opacity-10" />
            <div className="absolute inset-0 backdrop-blur-xl bg-black/50" />

            {/* Content with Enhanced Layout */}
            <div className="relative px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:max-w-xl text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))]">
                  Stay Ahead of the Curve
                </h2>
                <p className="text-white/70 text-lg">
                  Get exclusive insights, updates, and premium content delivered straight to your inbox.
                </p>
              </div>
              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your professional email"
                    className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--premium-purple))] placeholder:text-white/40 transition-all"
                  />
                  <motion.button
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] text-white font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(var(--premium-purple), 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5" />
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation with Premium Styling */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 relative">
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-5 pointer-events-none" />
          
          {/* Navigation Columns */}
          {['Product', 'Company', 'Legal'].map((section, index) => (
            <div key={section} className="relative z-10">
              <h3 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
                {section}
              </h3>
              <ul className="space-y-3">
                {navigation[section.toLowerCase() as keyof typeof navigation].map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors flex items-center group"
                      whileHover={{ x: 5, color: 'rgb(var(--premium-gold))' }}
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-[rgb(var(--premium-gold))]" />
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div className="relative z-10">
            <h3 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      color: `rgb(var(--premium-gold))`
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom with Premium Finish */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-5 pointer-events-none" />
          <p className="text-sm text-white/50 relative z-10">
            © 2023 ImportTrace. All rights reserved.
          </p>
          <div className="flex items-center gap-2 relative z-10">
            <Mail className="w-4 h-4 text-white/50" />
            <motion.a 
              href="mailto:support@importtrace.com" 
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
              whileHover={{ color: 'rgb(var(--premium-gold))' }}
            >
              anilkumarmeda6@gmail.com
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
