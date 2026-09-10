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

export const DigitalSection: React.FC = () => {
  return (
    <section
      id="digital"
      className="relative py-24 sm:py-32 bg-[#020617] text-slate-100 overflow-hidden"
    >
      {/* Dynamic ambient radial gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-300 text-xs font-bold tracking-wider uppercase mb-3">
            {DIGITAL_MEDIA_DATA.subtitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {DIGITAL_MEDIA_DATA.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
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
            className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/95 via-[#0B1120] to-[#020617] border border-blue-500/30 hover:border-blue-400 shadow-2xl shadow-blue-950/40 backdrop-blur-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient decorative glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800 text-xs font-bold uppercase tracking-wider">
                  <AtSign className="w-3.5 h-3.5 text-blue-400" />
                  <span>Threads Organic Growth</span>
                </span>
                <span className="text-xs text-slate-400 font-mono">~3 Months</span>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black tracking-tight text-white group-hover:text-blue-200 transition-colors">
                  9,000+
                </span>
                <span className="text-xl sm:text-2xl font-bold text-blue-400">Followers</span>
              </div>

              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Mengembangkan akun Threads secara organik hingga lebih dari 9.000 followers dalam waktu sekitar 3 bulan melalui strategi konten bernilai tinggi dan interaksi komunitas aktif.
              </p>
            </div>

            {/* Micro visual indicator */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <TrendingUp className="w-4 h-4" />
                100% Organic Reach
              </span>
              <span className="font-mono">@raihanfirdaus.id</span>
            </div>
          </motion.div>

          {/* Stat Card 2: Omzet 2 Digit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/95 via-[#0B1120] to-[#020617] border border-cyan-500/30 hover:border-cyan-400 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient decorative glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl group-hover:bg-cyan-500/25 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Monetization & Conversion</span>
                </span>
                <span className="text-xs text-slate-400 font-mono">~3 Months</span>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                  Omzet 2 Digit
                </span>
              </div>

              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Menghasilkan omzet 2 digit dalam waktu sekitar 3 bulan melalui Threads dengan membangun loyalitas audiens, penawaran relevan, dan narasi copywriting yang tepat sasaran.
              </p>
            </div>

            {/* Micro visual indicator */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <DollarSign className="w-4 h-4" />
                Proven Conversion Result
              </span>
              <span className="font-mono">Digital Marketing</span>
            </div>
          </motion.div>

        </div>

        {/* Decorative Visual Analytics & Dashboard Mockup */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" />
                <span>Threads Channel Growth Trajectory</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Visual Analytics Overview
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span>Organic Audience Traction (3-Month Ramp)</span>
            </div>
          </div>

          {/* Graphical Representation */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* SVG Trajectory Chart */}
            <div className="lg:col-span-8 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-xs font-semibold text-slate-400">Pertumbuhan Pengikut (0 &rarr; 9,000+)</span>
                <span className="text-xs font-bold text-blue-400 bg-blue-950 px-2.5 py-0.5 rounded-md border border-blue-800/50">Organik</span>
              </div>

              {/* Responsive SVG Chart */}
              <div className="w-full h-44 sm:h-52 relative">
                <svg viewBox="0 0 500 160" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="500" y2="40" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />

                  {/* Gradient Area */}
                  <path
                    d="M 0,150 Q 120,135 220,95 T 380,45 T 500,10 L 500,160 L 0,160 Z"
                    fill="url(#areaGradient)"
                  />

                  {/* Smooth Curve Line */}
                  <path
                    d="M 0,150 Q 120,135 220,95 T 380,45 T 500,10"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Key Milestones */}
                  <circle cx="0" cy="150" r="4" fill="#3B82F6" stroke="#0B1120" strokeWidth="2" />
                  <circle cx="220" cy="95" r="4" fill="#3B82F6" stroke="#0B1120" strokeWidth="2" />
                  <circle cx="380" cy="45" r="5" fill="#60A5FA" stroke="#0B1120" strokeWidth="2" />
                  <circle cx="500" cy="10" r="6" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                </svg>

                {/* Markers labels */}
                <div className="absolute bottom-1 left-0 right-0 flex justify-between text-[11px] text-slate-500 font-medium pt-2 border-t border-slate-800/60">
                  <span>Bulan 1 (Setup & Content)</span>
                  <span>Bulan 2 (Community Engagement)</span>
                  <span className="text-blue-400 font-bold">Bulan 3 (9,000+ Followers & 2-Digit Omzet)</span>
                </div>
              </div>
            </div>

            {/* Engagement Metrics Panel */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-400">Pilar Utama</h5>
                    <p className="text-sm font-bold text-white">Audience-Centric Copywriting</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400">
                    <Repeat className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-400">Metode</h5>
                    <p className="text-sm font-bold text-white">Daily Consistency & Interaction</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
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
          <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Digital Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {DIGITAL_MEDIA_DATA.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 hover:border-blue-500/40 hover:text-white transition-colors"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 hover:border-slate-600 transition-all shadow-sm"
              >
                <AtSign className="w-4 h-4 text-blue-400" />
                <span>Visit My Threads</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                id="digital-cta-instagram"
                href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all"
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
