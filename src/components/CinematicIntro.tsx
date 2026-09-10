import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const autoDismissTime = prefersReducedMotion ? 1200 : 2800;

    const timer = setTimeout(() => {
      handleExit();
    }, autoDismissTime);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleExit = () => {
    setIsVisible(false);
    // Give time for exit animation before calling onComplete
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cinematic-intro-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05, 
            filter: 'blur(10px)',
            transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } 
          }}
          onClick={handleExit}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] text-white cursor-pointer select-none overflow-hidden"
          style={{ willChange: 'opacity, transform, filter' }}
        >
          {/* Deep dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#040a1c] to-[#020617] pointer-events-none" />

          {/* Ambient Center Radial Glow (Subtle Morphism Core) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.6, 0.85], scale: [0.8, 1, 1.05] }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="absolute w-[500px] sm:w-[700px] h-[350px] sm:h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,rgba(99,102,241,0.1)_40%,transparent_70%)] blur-[80px] pointer-events-none"
          />

          {/* Secondary Soft Aurora Filament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.55], rotate: [0, 15] }}
            transition={{ duration: 2.8, ease: 'easeInOut' }}
            className="absolute w-[400px] h-[250px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-violet-600/15 blur-[90px] pointer-events-none"
          />

          {/* Floating Glowing Particle / Orb (Upper Left - Inspired by Reference Screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -20 }}
            animate={{ 
              opacity: [0, 0.9, 0.7], 
              x: [-30, 0, 10], 
              y: [-20, -10, -15],
              scale: [0.8, 1.1, 1]
            }}
            transition={{ duration: 2.6, ease: 'easeOut' }}
            className="absolute top-[18%] left-[18%] sm:top-[20%] sm:left-[22%] pointer-events-none"
          >
            <div className="relative">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#60A5FA] shadow-[0_0_20px_6px_rgba(59,130,246,0.7)]" />
              <div className="absolute -inset-2 rounded-full bg-cyan-400/30 blur-sm animate-pulse" />
            </div>
          </motion.div>

          {/* Subtle Secondary Particle (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0, 0.5, 0.35], 
              y: [20, 0, -10],
              scale: [0.5, 0.9, 0.8]
            }}
            transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' }}
            className="absolute bottom-[22%] right-[20%] sm:bottom-[24%] sm:right-[25%] pointer-events-none"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] shadow-[0_0_15px_4px_rgba(139,92,246,0.6)]" />
          </motion.div>

          {/* Center Brand Identity Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            
            {/* "MRF." Logo Row */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline justify-center tracking-tight"
            >
              {/* MRF letters */}
              <span className="text-5xl sm:text-7xl md:text-8xl font-black text-[#F8FAFC] tracking-[-0.03em] font-sans drop-shadow-sm select-none">
                MRF
              </span>
              
              {/* Electric Blue Square Dot with Breathing Glow */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.75, ease: 'backOut' }}
                className="inline-block ml-2 sm:ml-3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#3B82F6] rounded-[2px] shadow-[0_0_18px_rgba(59,130,246,0.95)] align-baseline"
              />
            </motion.div>

            {/* "MORPHISM PORTFOLIO" Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: 'easeOut' }}
              className="mt-4 sm:mt-5 text-[#94A3B8] text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.28em] sm:tracking-[0.34em] select-none"
            >
              MORPHISM PORTFOLIO
            </motion.div>

          </div>

          {/* Minimalist Skip / Entrance Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 sm:bottom-10 text-[11px] text-slate-500 font-mono tracking-wider uppercase flex items-center gap-2"
          >
            <span>CLICK ANYWHERE TO ENTER</span>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
