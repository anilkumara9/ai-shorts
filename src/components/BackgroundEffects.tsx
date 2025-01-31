'use client';

import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Noise Texture */}
      <div className="noise-texture absolute inset-0" />

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        {/* Purple Orb */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(var(--premium-purple), 0.15) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: ['-25%', '25%', '-25%'],
            y: ['-25%', '25%', '-25%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Gold Orb */}
        <motion.div
          className="absolute right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(var(--premium-gold), 0.1) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: ['25%', '-25%', '25%'],
            y: ['25%', '-25%', '25%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 0h6v60h-6V0zm-48 0h6v60h-6V0zm30 0h6v60h-6V0zM12 0h6v60h-6V0zm24 0h6v60h-6V0z' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Vignette Effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Animated Lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{ top: `${25 + i * 25}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </div>
  );
}
