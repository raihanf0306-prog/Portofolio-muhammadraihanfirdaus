import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase, Award, Users, Sparkles, ShieldCheck } from 'lucide-react';
import { useProfilePhoto } from '../utils/photoStore';

export const HeroMorphVisual: React.FC = () => {
  const { photo } = useProfilePhoto();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Subtle scroll reaction
  const { scrollY } = useScroll();
  const scrollRotate = useTransform(scrollY, [0, 600], [0, 15]);
  const scrollTranslateY = useTransform(scrollY, [0, 600], [0, 45]);

  useEffect(() => {
    // Only on desktop and if reduced motion is not preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized offset from center (-1 to 1)
      targetX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2)));
      targetY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (window.innerHeight / 2)));
    };

    const updatePosition = () => {
      // Gentle spring lerp
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMousePos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-lg mx-auto flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
    >
      {/* ========================================================================= */}
      {/* LAYER 0: Deep Liquid Aurora & Glow Shifting Backdrops */}
      {/* ========================================================================= */}
      <div 
        className="absolute -inset-10 sm:-inset-16 pointer-events-none overflow-visible flex items-center justify-center"
        style={{
          transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * -14}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Deep Primary Liquid Glow (Electric Blue + Indigo) */}
        <div className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#3B82F6]/30 via-[#6366F1]/25 to-[#22D3EE]/20 blur-[80px] sm:blur-[100px] animate-liquid-shift" />

        {/* Secondary Aurora Filament (Violet + Bright Blue) */}
        <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-gradient-to-bl from-[#8B5CF6]/30 via-[#60A5FA]/20 to-transparent blur-[75px] sm:blur-[95px] animate-liquid-pulse" />

        {/* Cyan Specular Point Flare */}
        <div 
          className="absolute -top-6 -right-6 w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-b from-[#22D3EE]/25 to-transparent blur-[50px] animate-pulse-glow"
        />
      </div>

      {/* ========================================================================= */}
      {/* LAYER 1: Liquid Glass 3D Organic SVG Mesh with Iridescent Edge */}
      {/* ========================================================================= */}
      <motion.div
        style={{
          rotateZ: scrollRotate,
          y: scrollTranslateY,
          transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 12}px, 0) rotateX(${mousePos.y * -6}deg) rotateY(${mousePos.x * 6}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="absolute -inset-4 sm:-inset-8 pointer-events-none z-0"
      >
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full opacity-65 sm:opacity-80 filter drop-shadow-[0_20px_35px_rgba(59,130,246,0.25)] animate-morph-liquid"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="liquidGrad1" x1="10%" y1="10%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="75%" stopColor="#6366F1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.35" />
            </linearGradient>
            
            <linearGradient id="liquidStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#22D3EE" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
            </linearGradient>

            <filter id="glassRefract" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Liquid Form Outer Path */}
          <path
            d="M440,320Q410,440,300,450Q190,460,150,350Q110,240,210,160Q310,80,410,160Q510,240,440,320Z"
            fill="url(#liquidGrad1)"
            stroke="url(#liquidStroke)"
            strokeWidth="2"
            strokeDasharray="400 20"
            className="animate-spin-extremely-slow"
          />

          {/* Inner Specular Highlight Arc */}
          <path
            d="M380,180 Q430,220,400,280"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
            className="blur-[1px]"
          />
        </svg>
      </motion.div>

      {/* ========================================================================= */}
      {/* LAYER 2: Main Liquid Glass Frame housing the Portrait */}
      {/* ========================================================================= */}
      <motion.div
        style={{
          transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 20px) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg)`,
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative z-10 w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[2.25rem] p-3 sm:p-4 liquid-glass-container shadow-[0_25px_60px_-15px_rgba(2,6,23,0.9),0_0_40px_rgba(59,130,246,0.15)] flex flex-col group overflow-visible"
      >
        {/* Specular Liquid Edge Highlight */}
        <div className="absolute inset-0 rounded-[2.25rem] pointer-events-none p-px bg-gradient-to-b from-white/30 via-white/5 to-cyan-400/20 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />

        {/* Photo Container */}
        <div className="relative w-full flex-1 rounded-[1.8rem] overflow-hidden bg-gradient-to-b from-[#071329] via-[#040A18] to-[#020617] border border-white/[0.08] flex flex-col items-center justify-center">
          <img
            src={photo}
            alt="Muhammad Raihan Firdaus"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = '/raihan.jpg';
            }}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.03]"
          />

          {/* Subtle Liquid Glass Internal Reflections */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/90 via-transparent to-white/10 pointer-events-none" />

          {/* Bottom Floating Glass Badge */}
          <div className="absolute bottom-3 left-3 right-3 py-2.5 px-4 rounded-2xl bg-[#071329]/80 border border-white/15 backdrop-blur-xl flex items-center justify-between text-left shadow-xl shadow-black/60">
            <div>
              <p className="text-xs font-bold text-white tracking-tight">Muhammad Raihan Firdaus</p>
              <p className="text-[10px] text-[#22D3EE] font-medium tracking-wide">Karawang, Jawa Barat • Open to Work</p>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-bold text-emerald-300">Ready</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SATELLITE FLOATING SHAPES: Multi-Depth Micro Morphism Badges */}
        {/* ========================================================================= */}
        
        {/* Floating Capsule 1: 5 Years Experience (Top Left) */}
        <motion.div
          style={{
            transform: `translate3d(${mousePos.x * 18}px, ${mousePos.y * 16}px, 40px)`,
            transition: 'transform 0.12s ease-out',
          }}
          className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl liquid-glass-badge border border-white/15 shadow-xl shadow-black/70 backdrop-blur-xl flex items-center gap-2.5 hover:scale-105 transition-transform"
        >
          <div className="p-1.5 rounded-xl bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/30">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">5 Years</p>
            <p className="text-[10px] text-[#94A3B8]">Experience</p>
          </div>
        </motion.div>

        {/* Floating Capsule 2: BNSP Certified (Center Right) */}
        <motion.div
          style={{
            transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * 14}px, 35px)`,
            transition: 'transform 0.12s ease-out',
          }}
          className="absolute top-1/3 -right-4 sm:-right-7 px-4 py-2.5 rounded-2xl liquid-glass-badge border border-amber-500/40 shadow-xl shadow-black/70 backdrop-blur-xl flex items-center gap-2.5 hover:scale-105 transition-transform"
        >
          <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">BNSP Certified</p>
            <p className="text-[10px] text-amber-200/80">Content Creator</p>
          </div>
        </motion.div>

        {/* Floating Capsule 3: 9K+ Followers (Bottom Right) */}
        <motion.div
          style={{
            transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * -14}px, 45px)`,
            transition: 'transform 0.12s ease-out',
          }}
          className="absolute -bottom-5 right-4 sm:right-8 px-4 py-2.5 rounded-2xl liquid-glass-badge border border-[#22D3EE]/40 shadow-xl shadow-black/70 backdrop-blur-xl flex items-center gap-2.5 hover:scale-105 transition-transform"
        >
          <div className="p-1.5 rounded-xl bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/40">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">9K+ Followers</p>
            <p className="text-[10px] text-[#22D3EE]">Organic Threads</p>
          </div>
        </motion.div>

        {/* Satellite Floating Digital Glass Droplet (Top Right) */}
        <motion.div
          style={{
            transform: `translate3d(${mousePos.x * -24}px, ${mousePos.y * -20}px, 60px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="absolute -top-6 right-8 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full liquid-glass-droplet text-white text-[11px] font-bold shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#22D3EE] animate-pulse" />
          <span className="text-[#F8FAFC]">Morphism</span>
        </motion.div>

        {/* Satellite Glowing Mini Dot (Bottom Left) */}
        <div 
          style={{
            transform: `translate3d(${mousePos.x * 26}px, ${mousePos.y * 22}px, 50px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="absolute -bottom-3 -left-3 hidden sm:block w-4 h-4 rounded-full bg-[#60A5FA] shadow-[0_0_18px_5px_rgba(59,130,246,0.8)]"
        />
      </motion.div>
    </div>
  );
};
