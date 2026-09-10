import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  MessageCircle, 
  Mail, 
  Instagram, 
  AtSign, 
  Award, 
  Briefcase, 
  Users, 
  Sparkles, 
  MapPin, 
  CheckCircle, 
  Image as ImageIcon 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoStore';
import { MorphBackgroundDecor } from './MorphBackgroundDecor';

const roles = [
  'Admin Assistant',
  'Administrative Support',
  'Social Media',
];

export const HeroSection: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { photo } = useProfilePhoto();

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
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-[#070A13]"
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
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-blue-950/40 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">OPEN TO WORK • REMOTE / WFH</span>
            </div>

            {/* Headline 1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                Muhammad Raihan Firdaus.
              </span>
            </h1>

            {/* Dynamic Role Tag */}
            <div className="mt-4 flex items-center gap-2.5 flex-wrap">
              <span className="text-slate-400 text-base sm:text-lg font-medium">Focusing as:</span>
              <div className="h-9 overflow-hidden inline-flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-500/20 text-cyan-200 border border-cyan-500/30 font-bold text-sm sm:text-base backdrop-blur-md shadow-xs shadow-cyan-500/10"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Headline 2 */}
            <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-200 tracking-tight">
              Administrative Support with Digital Skills.
            </h2>

            {/* Subheadline description */}
            <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              Saya memiliki pengalaman 5 tahun bekerja di lingkungan pendidikan dengan pengalaman dalam administrasi, koordinasi kegiatan, pelayanan informasi, event, serta social media.
            </p>

            {/* Location & Personal Traits */}
            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-white/[0.08] text-blue-300 font-medium backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Karawang, Jawa Barat</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-white/[0.08] text-slate-300 font-medium backdrop-blur-md">Organized</span>
                <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-white/[0.08] text-slate-300 font-medium backdrop-blur-md">Communicative</span>
                <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-white/[0.08] text-slate-300 font-medium backdrop-blur-md">Detail-Oriented</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-btn-experience"
                onClick={() => handleScrollTo('experience')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full morph-btn-primary text-white font-bold text-xs uppercase tracking-wider transition-all duration-200"
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
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect:</span>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  id="hero-social-instagram"
                  href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-900/60 border border-white/[0.08] text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-slate-800/80 transition-all backdrop-blur-md"
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
                  className="p-2.5 rounded-full bg-slate-900/60 border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/30 hover:bg-slate-800/80 transition-all backdrop-blur-md"
                  title="Threads: @raihanfirdaus.id"
                >
                  <AtSign className="w-4 h-4" />
                </a>

                {/* Email */}
                <a
                  id="hero-social-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-full bg-slate-900/60 border border-white/[0.08] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all backdrop-blur-md"
                  title={`Email: ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <span className="text-xs text-slate-400 ml-1">@raihanfirdaus.id</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Morph Graphic Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Morph Graphic Centerpiece Blobs */}
            <div className="absolute -inset-6 pointer-events-none select-none flex items-center justify-center">
              {/* Organic Blob Layer 1 (Electric Blue) */}
              <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-blue-600/35 via-indigo-600/30 to-cyan-400/20 blur-[60px] animate-morph-blob-1" />
              
              {/* Organic Blob Layer 2 (Violet / Magenta) */}
              <div className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-br from-violet-600/30 via-purple-600/25 to-blue-500/20 blur-[50px] animate-morph-blob-2" />

              {/* Organic Blob Layer 3 (Cyan Accent Glow) */}
              <div className="absolute -bottom-8 -right-6 w-48 sm:w-60 h-48 sm:h-60 rounded-full bg-gradient-to-tl from-cyan-400/30 via-teal-500/20 to-transparent blur-[45px] animate-morph-blob-3" />
            </div>

            {/* Main Translucent Morph Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[2rem] p-3.5 bg-slate-900/50 border border-white/10 shadow-2xl shadow-indigo-950/50 backdrop-blur-2xl flex flex-col group">
              
              {/* Photo Canvas */}
              <div className="relative w-full flex-1 rounded-[1.6rem] overflow-hidden bg-gradient-to-b from-slate-900 to-[#070A13] border border-white/[0.08] flex flex-col items-center justify-center text-center">
                <img 
                  src={photo} 
                  alt="Muhammad Raihan Firdaus" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/raihan.jpg';
                  }}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A13] via-transparent to-slate-950/20 pointer-events-none" />

                {/* Subtitle card bottom */}
                <div className="absolute bottom-3 left-3 right-3 py-2.5 px-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl flex items-center justify-between text-left shadow-xl">
                  <div>
                    <p className="text-xs font-bold text-white">Muhammad Raihan Firdaus</p>
                    <p className="text-[10px] text-cyan-300 font-medium">Karawang, Jawa Barat • Open to Work</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-semibold text-emerald-400">Available</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 5 Years Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-slate-900/85 border border-white/10 shadow-xl shadow-black/50 backdrop-blur-xl flex items-center gap-2.5 hover:scale-105 transition-transform"
              >
                <div className="p-1.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">5 Years</p>
                  <p className="text-[10px] text-slate-400">Experience</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: BNSP Certified */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-1/3 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-slate-900/85 border border-amber-500/30 shadow-xl shadow-black/50 backdrop-blur-xl flex items-center gap-2.5 hover:scale-105 transition-transform"
              >
                <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">BNSP Certified</p>
                  <p className="text-[10px] text-amber-200/80">Content Creator</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: 9K+ Organic Followers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-5 right-4 sm:right-8 px-4 py-2.5 rounded-2xl bg-slate-900/85 border border-cyan-500/30 shadow-xl shadow-black/50 backdrop-blur-xl flex items-center gap-2.5 hover:scale-105 transition-transform"
              >
                <div className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">9K+ Followers</p>
                  <p className="text-[10px] text-cyan-300">Organic Threads</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
