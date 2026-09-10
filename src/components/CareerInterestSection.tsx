import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, FolderCheck, Share2, Laptop, ArrowRight } from 'lucide-react';
import { CAREER_INTERESTS, PERSONAL_INFO } from '../data/portfolioData';

export const CareerInterestSection: React.FC = () => {
  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      case 'FolderCheck':
        return <FolderCheck className="w-6 h-6 text-cyan-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-indigo-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-emerald-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section
      id="career-interest"
      className="relative py-20 sm:py-28 bg-[#020617] text-slate-100 border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-300 text-xs font-bold tracking-wider uppercase mb-3">
            CAREER OPPORTUNITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Currently Open For
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
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
              className="group p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 shadow-xl shadow-black/20 backdrop-blur-xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 w-fit mb-5 group-hover:border-blue-500/40 transition-colors">
                  {getRoleIcon(item.icon)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-blue-400 font-semibold">
                <span>Available</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
