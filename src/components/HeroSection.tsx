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
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-[#020617] bg-grid-pattern-dark"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-800/15 rounded-full blur-3xl pointer-events-none" />

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
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-600/40 text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>OPEN TO WORK • REMOTE / WFH</span>
            </div>

            {/* Headline 1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">
                Muhammad Raihan Firdaus.
              </span>
            </h1>

            {/* Dynamic Role Tag */}
            <div className="mt-3 flex items-center gap-2.5 flex-wrap">
              <span className="text-slate-400 text-lg sm:text-xl font-medium">Focusing as:</span>
              <div className="h-9 overflow-hidden inline-flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/40 font-bold text-base sm:text-lg shadow-sm"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Headline 2 */}
            <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 tracking-tight">
              Administrative Support with Digital Skills.
            </h2>

            {/* Subheadline description */}
            <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
              Saya memiliki pengalaman 5 tahun bekerja di lingkungan pendidikan dengan pengalaman dalam administrasi, koordinasi kegiatan, pelayanan informasi, event, serta social media.
            </p>

            {/* Location & Personal Traits */}
            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 text-blue-300 font-medium">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Karawang, Jawa Barat</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">Organized</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">Communicative</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">Detail-Oriented</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-btn-experience"
                onClick={() => handleScrollTo('experience')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View My Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-btn-contact"
                href="https://wa.me/6285718048258?text=Halo%20Raihan,%20saya%20tertarik%20dengan%20portofolio%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-4 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect:</span>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  id="hero-social-instagram"
                  href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-slate-800 transition-all"
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
                  className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
                  title="Threads: @raihanfirdaus.id"
                >
                  <AtSign className="w-4 h-4" />
                </a>

                {/* Email */}
                <a
                  id="hero-social-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-slate-800 transition-all"
                  title={`Email: ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <span className="text-xs text-slate-500 ml-1">@raihanfirdaus.id</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Portrait Card Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Ambient backdrop glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-[2rem] opacity-25 blur-2xl"></div>

            {/* Main Portrait Container */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[1.75rem] p-3 bg-gradient-to-b from-slate-800/90 via-slate-900/90 to-[#0B1120] border border-blue-500/30 shadow-2xl shadow-blue-950/50 backdrop-blur-xl flex flex-col">
              
              {/* Photo Canvas */}
              <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#020617] border border-slate-800/80 flex flex-col items-center justify-center text-center group">
                <img 
                  src={photo} 
                  alt="Muhammad Raihan Firdaus" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/raihan.jpg';
                  }}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette/gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-slate-950/20 pointer-events-none" />

                {/* Subtitle card bottom */}
                <div className="absolute bottom-3 left-3 right-3 py-2.5 px-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-md flex items-center justify-between text-left shadow-xl">
                  <div>
                    <p className="text-xs font-bold text-white">Muhammad Raihan Firdaus</p>
                    <p className="text-[10px] text-blue-400 font-medium">Karawang, Jawa Barat • Open to Work</p>
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
                className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-slate-900/95 border border-blue-500/40 shadow-xl shadow-black/40 backdrop-blur-md flex items-center gap-2.5"
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
                className="absolute top-1/3 -right-4 sm:-right-6 px-3.5 py-2 rounded-2xl bg-slate-900/95 border border-amber-500/40 shadow-xl shadow-black/40 backdrop-blur-md flex items-center gap-2.5"
              >
                <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">BNSP Certified</p>
                  <p className="text-[10px] text-slate-400">Content Creator</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: 9K+ Organic Followers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-5 right-4 sm:right-8 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-xl shadow-black/40 backdrop-blur-md flex items-center gap-2.5"
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
