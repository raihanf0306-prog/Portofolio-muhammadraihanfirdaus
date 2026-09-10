import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, FolderCheck, Share2, Laptop } from 'lucide-react';
import { CAREER_INTERESTS } from '../data/portfolioData';
import { MorphBackgroundDecor } from './MorphBackgroundDecor';

export const CareerInterestSection: React.FC = () => {
  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      case 'FolderCheck':
        return <FolderCheck className="w-6 h-6 text-cyan-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-violet-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-emerald-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section
      id="career-interest"
      className="relative py-20 sm:py-28 bg-[#070B18] text-slate-100 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Morph background blobs */}
      <MorphBackgroundDecor variant="subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md">
            CAREER OPPORTUNITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Currently Open For
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Saya terbuka untuk kesempatan bekerja dan berkolaborasi dalam lingkungan kerja yang memungkinkan saya menggunakan kemampuan administrasi, komunikasi, koordinasi, dan digital secara bersamaan.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_INTERESTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group p-6 rounded-3xl morph-card hover:border-cyan-400/40 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/[0.08] backdrop-blur-md w-fit mb-5 group-hover:border-cyan-400/40 transition-colors shadow-sm">
                  {getRoleIcon(item.icon)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-cyan-400 font-bold uppercase tracking-wider">
                <span>Available</span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
