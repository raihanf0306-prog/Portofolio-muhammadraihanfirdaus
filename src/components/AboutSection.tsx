import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  MessageSquare, 
  CalendarCheck, 
  GraduationCap, 
  Building2, 
  Clock, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { ABOUT_ME_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoStore';
import { MorphBackgroundDecor } from './MorphBackgroundDecor';

export const AboutSection: React.FC = () => {
  const { photo } = useProfilePhoto();
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#0A0F1E] text-slate-100 overflow-hidden"
    >
      {/* Subtle organic background morph blob */}
      <MorphBackgroundDecor variant="subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md">
            01 — GET TO KNOW ME
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-lg text-slate-300 font-normal">
            Dedikasi tinggi terhadap kerapian administrasi, pelayanan komunikatif, dan solusi terorganisir.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="p-8 sm:p-9 rounded-3xl morph-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-400 rounded-l-3xl" />
              
              {/* Profile Intro Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-60 blur-xs" />
                  <img
                    src={photo}
                    alt="Muhammad Raihan Firdaus"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/raihan.jpg';
                    }}
                    className="relative w-16 h-16 rounded-2xl object-cover object-top border border-white/20 shadow-md shrink-0"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Active" />
                  </div>
                  <p className="text-xs text-cyan-300 font-semibold">Admin Assistant & Administrative Support</p>
                  <p className="text-xs text-slate-400">STIT Hidayatunnajah Bekasi • Karawang, Jawa Barat</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {ABOUT_ME_DATA.intro}
              </p>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                {ABOUT_ME_DATA.paragraph1}
              </p>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                {ABOUT_ME_DATA.paragraph2}
              </p>

              <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm sm:text-base font-semibold text-cyan-200">
                  {ABOUT_ME_DATA.paragraph3}
                </p>
                <a
                  href="https://wa.me/6285718048258?text=Halo%20Raihan,%20saya%20tertarik%20dengan%20portofolio%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full morph-btn-primary text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Diskusikan Peluang</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Education & Background Badge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl morph-card flex items-center gap-4 hover:border-blue-500/30 transition-colors">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pendidikan</p>
                  <h4 className="text-sm font-bold text-white mt-0.5">S1 Pendidikan Bahasa Arab</h4>
                  <p className="text-xs text-slate-300">STIT Hidayatunnajah Bekasi</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl morph-card flex items-center gap-4 hover:border-indigo-500/30 transition-colors">
                <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Spesialisasi Kerja</p>
                  <h4 className="text-sm font-bold text-white mt-0.5">5 Tahun Pendidikan</h4>
                  <p className="text-xs text-slate-300">Administrasi, Event & Koordinasi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Highlight Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
              Personal Branding Values
            </h3>

            {/* Card 1: Organized */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl morph-card hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-950/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shrink-0 shadow-md shadow-blue-500/30">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">Organized</h4>
                  <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                    Terbiasa bekerja dengan administrasi, timeline, dan koordinasi kegiatan. Menjaga alur kerja selalu tepat waktu dan terencana.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Communicative */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl morph-card hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-950/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shrink-0 shadow-md shadow-violet-500/30">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">Communicative</h4>
                  <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                    Terbiasa berkomunikasi dengan tim, orang tua, peserta, dan berbagai pihak secara ramah, solutif, dan profesional.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Detail-Oriented */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl morph-card hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shrink-0 shadow-md shadow-cyan-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">Detail-Oriented</h4>
                  <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                    Terbiasa melakukan pendataan, verifikasi berkas, pengecekan informasi, dan administrasi dengan akurasi tinggi.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
