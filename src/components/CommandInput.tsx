'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface CommandInputProps {
  onSubmit: (command: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function CommandInput({ 
  onSubmit, 
  placeholder = 'Type a command...', 
  disabled = false 
}: CommandInputProps) {
  const [command, setCommand] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim() && !disabled) {
      onSubmit(command);
      setCommand('');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Focus ring animation */}
        <motion.div
          className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))] opacity-0"
          animate={{ opacity: isFocused ? 0.5 : 0 }}
          transition={{ duration: 0.2 }}
        />

        <div className="relative flex gap-2 p-1">
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 px-4 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10
                     text-white placeholder-gray-400 focus:outline-none
                     transition-all duration-300"
          />
          
          <motion.button
            type="submit"
            disabled={disabled || !command.trim()}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[rgb(var(--premium-purple))] to-[rgb(var(--premium-gold))]
                     text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed
                     hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Command suggestions or history could go here */}
      <motion.div
        className="mt-2 space-y-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Add command suggestions here if needed */}
      </motion.div>
    </motion.form>
  );
} 