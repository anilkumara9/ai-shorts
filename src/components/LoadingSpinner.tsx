'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="relative w-12 h-12">
      {/* Outer Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-[rgb(var(--premium-purple))] border-r-[rgb(var(--premium-gold))]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Inner Ring */}
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-transparent border-t-[rgb(var(--premium-gold))] border-r-[rgb(var(--premium-purple))]"
        animate={{ rotate: -360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="absolute inset-[40%] rounded-full bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))]"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-br from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-20" />
    </div>
  );
} 