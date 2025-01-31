'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Layout Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';

// Main Sections
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import InteractiveDemo from '@/components/InteractiveDemo';

// Social Proof & Testimonials
import SocialProof from '@/components/SocialProof';
import YouTuberShowcase from '@/components/YouTuberShocase';

// AI Features & Content
import ContentSuggestions from '@/components/ContentSuggestions';
import Pricing from '@/components/Pricing';

// Support & CTA
import QASection from '@/components/QASection';
import CTA from '@/components/CTA';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25,
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LoadingSpinner />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-white/60"
          >
            Loading amazing features...
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial="hidden"
          animate="visible"
          variants={pageVariants}
          className="relative"
        >
          {/* Fixed Header */}
          <Header />

          <main className="relative">
            {/* Hero Section */}
            <motion.section variants={sectionVariants} className="relative z-10">
              <Hero />
            </motion.section>

            {/* Social Proof */}
            <motion.section variants={sectionVariants} className="relative z-20">
              <SocialProof />
            </motion.section>

            {/* Main Features */}
            <motion.section variants={sectionVariants} className="relative z-10">
              <Features />
            </motion.section>

            {/* How It Works */}
            <motion.section variants={sectionVariants} className="relative z-20">
              <HowItWorks />
            </motion.section>

            {/* Pricing */}
            <motion.section variants={sectionVariants} className="relative z-10">
              <Pricing />
            </motion.section>

            {/* Success Stories */}
            <motion.section variants={sectionVariants} className="relative z-20">
              <YouTuberShowcase />
            </motion.section>

            {/* FAQ Section */}
            <motion.section variants={sectionVariants} className="relative z-10">
              <QASection />
            </motion.section>

            {/* Final CTA */}
            <motion.section variants={sectionVariants} className="relative z-20">
              <CTA />
            </motion.section>
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
