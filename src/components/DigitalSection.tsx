import React from 'react';
import { motion } from 'motion/react';
import { 
  AtSign, 
  Instagram, 
  TrendingUp, 
  DollarSign, 
  Share2, 
  Sparkles, 
  ArrowUpRight, 
  BarChart3, 
  Heart, 
  MessageCircle, 
  Repeat, 
  CheckCircle2
} from 'lucide-react';
import { DIGITAL_MEDIA_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { MorphBackgroundDecor } from './MorphBackgroundDecor';

export const DigitalSection: React.FC = () => {
  return (
    <section
      id="digital"
      className="relative py-24 sm:py-32 bg-[#090D1A] text-slate-100 overflow-hidden"
    >
      {/* Morph background blobs */}
      <MorphBackgroundDecor variant="subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md">
            {DIGITAL_MEDIA_DATA.subtitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {DIGITAL_MEDIA_DATA.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {DIGITAL_MEDIA_DATA.description}
          </p>
        </div>

        {/* 2 Large Statistic Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Stat Card 1: 9,000+ Followers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative p-8 sm:p-10 rounded-3xl morph-card hover:border-blue-500/50 shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-300"
          >
            {/* Ambient decorative glow */}
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-blue-500/15 rounded-full blur-3xl group-hover:bg-blue-500/25 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <AtSign className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Threads Organic Growth</span>
                </span>
                <span className="text-xs text-slate-400 font-mono">~3 Months</span>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                  9,000+
                </span>
                <span className="text-xl sm:text-2xl font-bold text-cyan-400">Followers</span>
              </div>

              <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
                Mengembangkan akun Threads secara organik hingga lebih dari 9.000 followers dalam waktu sekitar 3 bulan melalui strategi konten bernilai tinggi dan interaksi komunitas aktif.
              </p>
            </div>

            {/* Micro visual indicator */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <TrendingUp className="w-4 h-4" />
                100% Organic Reach
              </span>
              <span className="font-mono text-slate-300">@raihanfirdaus.id</span>
            </div>
          </motion.div>

          {/* Stat Card 2: Omzet 2 Digit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative p-8 sm:p-10 rounded-3xl morph-card hover:border-violet-500/50 shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-300"
          >
            {/* Ambient decorative glow */}
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-violet-500/15 rounded-full blur-3xl group-hover:bg-violet-500/25 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  <span>Monetization & Conversion</span>
                </span>
                <span className="text-xs text-slate-400 font-mono">~3 Months</span>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white group-hover:text-violet-200 transition-colors">
                  Omzet 2 Digit
                </span>
              </div>

              <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
                Menghasilkan omzet 2 digit dalam waktu sekitar 3 bulan melalui Threads dengan membangun loyalitas audiens, penawaran relevan, dan narasi copywriting yang tepat sasaran.
              </p>
            </div>

            {/* Micro visual indicator */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <DollarSign className="w-4 h-4" />
                Proven Conversion Result
              </span>
              <span className="font-mono text-slate-300">Digital Marketing</span>
            </div>
          </motion.div>

        </div>

        {/* Decorative Visual Analytics & Dashboard Mockup */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl morph-card relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" />
                <span>Threads Channel Growth Trajectory</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Visual Analytics Overview
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span>Organic Audience Traction (3-Month Ramp)</span>
            </div>
          </div>

          {/* Graphical Representation */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* SVG Trajectory Chart */}
            <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-900/50 border border-white/[0.06] backdrop-blur-md">
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-xs font-semibold text-slate-300">Pertumbuhan Pengikut (0 &rarr; 9,000+)</span>
                <span className="text-xs font-bold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">Organik</span>
              </div>

              {/* Responsive SVG Chart */}
              <div className="w-full h-44 sm:h-52 relative">
                <svg viewBox="0 0 500 160" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.35" />
                      <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="60%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="500" y2="40" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" opacity="0.4" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" opacity="0.4" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" opacity="0.4" />

                  {/* Gradient Area */}
                  <path
                    d="M 0,150 Q 120,135 220,95 T 380,45 T 500,10 L 500,160 L 0,160 Z"
                    fill="url(#areaGradient)"
                  />

                  {/* Smooth Curve Line */}
                  <path
                    d="M 0,150 Q 120,135 220,95 T 380,45 T 500,10"
                    fill="none"
                    stroke="url(#strokeGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Key Milestones */}
                  <circle cx="0" cy="150" r="4" fill="#3B82F6" stroke="#0B1120" strokeWidth="2" />
                  <circle cx="220" cy="95" r="4" fill="#3B82F6" stroke="#0B1120" strokeWidth="2" />
                  <circle cx="380" cy="45" r="5" fill="#06B6D4" stroke="#0B1120" strokeWidth="2" />
                  <circle cx="500" cy="10" r="6" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="3" />
                </svg>

                {/* Markers labels */}
                <div className="absolute bottom-1 left-0 right-0 flex justify-between text-[11px] text-slate-400 font-medium pt-2 border-t border-white/[0.06]">
                  <span>Bulan 1 (Setup & Content)</span>
                  <span>Bulan 2 (Community Engagement)</span>
                  <span className="text-cyan-300 font-bold">Bulan 3 (9,000+ Followers & 2-Digit Omzet)</span>
                </div>
              </div>
            </div>

            {/* Engagement Metrics Panel */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/[0.06] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-400">Pilar Utama</h5>
                    <p className="text-sm font-bold text-white">Audience-Centric Copywriting</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/[0.06] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                    <Repeat className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-400">Metode</h5>
                    <p className="text-sm font-bold text-white">Daily Consistency & Interaction</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/[0.06] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-400">Standar Kompetensi</h5>
                    <p className="text-sm font-bold text-white">BNSP Content Creator Certified</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Digital Skills Tags & CTAs */}
          <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Digital Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {DIGITAL_MEDIA_DATA.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] text-xs font-medium text-slate-200 hover:border-cyan-500/40 hover:text-white transition-colors backdrop-blur-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social CTAs */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                id="digital-cta-threads"
                href={`https://threads.net/@${PERSONAL_INFO.threads.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full morph-btn-secondary text-white text-xs font-bold tracking-wide uppercase transition-all shadow-sm"
              >
                <AtSign className="w-4 h-4 text-cyan-400" />
                <span>Visit My Threads</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                id="digital-cta-instagram"
                href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full morph-btn-primary text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-indigo-500/30 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Visit My Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
