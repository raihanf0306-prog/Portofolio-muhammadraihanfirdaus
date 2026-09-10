import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  MessageCircle, 
  Mail, 
  Instagram, 
  AtSign, 
  MapPin 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MorphBackgroundDecor } from './MorphBackgroundDecor';
import { HeroMorphVisual } from './HeroMorphVisual';

const roles = [
  'Admin Assistant',
  'Administrative Support',
  'Social Media',
];

export const HeroSection: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-[#020617]"
    >
      {/* Morph Graphic Background Elements */}
      <MorphBackgroundDecor variant="hero" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal branding narrative & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#071329]/80 border border-[#3B82F6]/30 text-[#60A5FA] text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-blue-950/40 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide text-xs uppercase font-bold text-slate-200">OPEN TO WORK • REMOTE / WFH</span>
            </div>

            {/* Headline 1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#F8FAFC] leading-tight">
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#A5B4FC] to-[#22D3EE] bg-clip-text text-transparent">
                Muhammad Raihan Firdaus.
              </span>
            </h1>

            {/* Dynamic Role Tag */}
            <div className="mt-4 flex items-center gap-2.5 flex-wrap">
              <span className="text-[#94A3B8] text-base sm:text-lg font-medium">Focusing as:</span>
              <div className="h-9 overflow-hidden inline-flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center px-3.5 py-1 rounded-full bg-gradient-to-r from-[#3B82F6]/20 via-[#6366F1]/20 to-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/30 font-bold text-sm sm:text-base backdrop-blur-md shadow-xs shadow-cyan-500/10"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Headline 2 */}
            <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#F8FAFC]/90 tracking-tight">
              Administrative Support with Digital Skills.
            </h2>

            {/* Subheadline description */}
            <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              Saya memiliki pengalaman 5 tahun bekerja di lingkungan pendidikan dengan pengalaman dalam administrasi, koordinasi kegiatan, pelayanan informasi, event, serta social media.
            </p>

            {/* Location & Personal Traits */}
            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#94A3B8]">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071329]/80 border border-white/[0.08] text-[#60A5FA] font-medium backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                <span>Karawang, Jawa Barat</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#071329]/80 border border-white/[0.08] text-slate-300 font-medium backdrop-blur-md">Organized</span>
                <span className="px-3 py-1 rounded-full bg-[#071329]/80 border border-white/[0.08] text-slate-300 font-medium backdrop-blur-md">Communicative</span>
                <span className="px-3 py-1 rounded-full bg-[#071329]/80 border border-white/[0.08] text-slate-300 font-medium backdrop-blur-md">Detail-Oriented</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-btn-experience"
                onClick={() => handleScrollTo('experience')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full morph-btn-primary text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                <span>View My Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-btn-contact"
                href="https://wa.me/6285718048258?text=Halo%20Raihan,%20saya%20tertarik%20dengan%20portofolio%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full morph-btn-secondary text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-4 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Connect:</span>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  id="hero-social-instagram"
                  href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#071329]/80 border border-white/[0.08] text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-slate-800/80 transition-all backdrop-blur-md"
                  title="Instagram: @raihanfirdaus.id"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* Threads */}
                <a
                  id="hero-social-threads"
                  href={`https://threads.net/@${PERSONAL_INFO.threads.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#071329]/80 border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/30 hover:bg-slate-800/80 transition-all backdrop-blur-md"
                  title="Threads: @raihanfirdaus.id"
                >
                  <AtSign className="w-4 h-4" />
                </a>

                {/* Email */}
                <a
                  id="hero-social-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-full bg-[#071329]/80 border border-white/[0.08] text-slate-300 hover:text-[#22D3EE] hover:border-[#22D3EE]/40 hover:bg-slate-800/80 transition-all backdrop-blur-md"
                  title={`Email: ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <span className="text-xs text-[#94A3B8] ml-1">@raihanfirdaus.id</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Enhanced Futuristic Morph Graphic Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <HeroMorphVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
