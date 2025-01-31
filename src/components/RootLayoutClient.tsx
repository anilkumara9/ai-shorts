'use client';

import { useEffect } from 'react';
import BackgroundEffects from './BackgroundEffects';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Prevent scrollbar from shifting content
    document.documentElement.style.scrollbarGutter = 'stable';
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="relative min-h-screen">
        {/* Background Effects */}
        <BackgroundEffects />
        
        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
} 