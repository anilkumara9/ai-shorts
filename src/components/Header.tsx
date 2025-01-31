'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, LogIn } from 'lucide-react';

// Define navigation items to resolve lint error
const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      {/* Premium Noise Texture with Enhanced Opacity */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }} 
      />

      <div className="mx-auto max-w-7xl px-4 relative">
        <div className="relative rounded-full overflow-hidden">
          {/* Advanced Background Blur with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl" />
          
          {/* Sophisticated Gradient Border */}
          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[rgb(var(--premium-purple))] via-[rgb(var(--premium-gold))] to-[rgb(var(--premium-purple))] opacity-50" />
          
          {/* Content */}
          <nav className="relative flex items-center justify-between px-6 py-3">
            {/* Logo with Enhanced Hover */}
            <motion.a
              href="/"
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] tracking-tight"
              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 10px rgba(var(--premium-purple), 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              KING AI
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Sign In Button */}
              <motion.button
                className="ml-2 px-5 py-2 rounded-full border border-white/10 text-white/80 hover:text-white flex items-center gap-2 transition-all"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </motion.button>

              {/* Get Started Button with Enhanced Gradient */}
              <motion.button
                className="ml-2 px-6 py-2 rounded-full bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] text-white font-medium shadow-lg hover:shadow-xl transition-all"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(var(--premium-purple), 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-24 left-4 right-4 rounded-2xl overflow-hidden bg-black"
            >
              <div className="relative">
                {/* Background Blur with Noise */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
                
                {/* Gradient Border */}
                <div className="absolute inset-0 p-[1px] bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-30" />
                
                {/* Content */}
                <nav className="relative divide-y divide-white/10">
                  {navigation.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between px-6 py-4 text-gray-300 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </motion.a>
                  ))}
                  <div className="px-6 py-4 space-y-3">
                    <motion.button
                      className="w-full px-6 py-3 rounded-full border border-white/10 text-white/80 hover:text-white flex items-center justify-center gap-2"
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: 'rgba(255,255,255,0.05)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <LogIn className="w-4 h-4" />
                      Sign In
                    </motion.button>
                    <motion.button
                      className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] text-white font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
