import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Laptop, 
  Users2, 
  Database, 
  Calendar, 
  FolderArchive, 
  CheckCircle, 
  Presentation, 
  PenTool, 
  Share2, 
  MessageSquare, 
  Compass, 
  Lightbulb, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Clock,
  Briefcase
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { MorphBackgroundDecor } from './MorphBackgroundDecor';

export const SkillsSection: React.FC = () => {
  // Helper to get matching icons for specific skills
  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      // Admin
      case 'Data Entry':
      case 'Pengelolaan Data':
        return <Database className="w-4 h-4 text-blue-400" />;
      case 'Administrasi Kegiatan':
      case 'Event Administration':
        return <Calendar className="w-4 h-4 text-blue-400" />;
      case 'Dokumentasi':
        return <FileText className="w-4 h-4 text-blue-400" />;
      case 'Pengarsipan':
        return <FolderArchive className="w-4 h-4 text-blue-400" />;
      case 'Time Management':
        return <Clock className="w-4 h-4 text-blue-400" />;

      // Digital
      case 'Google Workspace':
      case 'Microsoft Office':
        return <Laptop className="w-4 h-4 text-cyan-400" />;
      case 'Canva':
      case 'Content Creation':
        return <PenTool className="w-4 h-4 text-cyan-400" />;
      case 'Social Media Management':
        return <Share2 className="w-4 h-4 text-cyan-400" />;
      case 'Copywriting':
        return <MessageSquare className="w-4 h-4 text-cyan-400" />;
      case 'Digital Marketing':
        return <Sparkles className="w-4 h-4 text-cyan-400" />;

      // Soft Skills
      case 'Communication':
        return <MessageSquare className="w-4 h-4 text-indigo-400" />;
      case 'Teamwork':
        return <Users2 className="w-4 h-4 text-indigo-400" />;
      case 'Problem Solving':
        return <Lightbulb className="w-4 h-4 text-indigo-400" />;
      case 'Adaptability':
        return <Compass className="w-4 h-4 text-indigo-400" />;
      case 'Detail-Oriented':
        return <CheckCircle className="w-4 h-4 text-indigo-400" />;
      case 'Fast Learner':
        return <Zap className="w-4 h-4 text-indigo-400" />;
      case 'Responsibility':
        return <ShieldCheck className="w-4 h-4 text-indigo-400" />;

      default:
        return <CheckCircle className="w-4 h-4 text-blue-400" />;
    }
  };

  const getCategoryHeaderIcon = (id: string) => {
    switch (id) {
      case 'admin-skills':
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      case 'digital-skills':
        return <Laptop className="w-6 h-6 text-cyan-400" />;
      case 'soft-skills':
        return <Users2 className="w-6 h-6 text-violet-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#090D1C] text-slate-100 overflow-hidden"
    >
      {/* Morph background decoration */}
      <MorphBackgroundDecor variant="subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md">
            07 — CORE COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Kombinasi komprehensif antara ketelitian administrasi, keahlian media digital, dan keterampilan komunikasi interpersonal.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group p-8 rounded-3xl morph-card hover:border-blue-500/40 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                {/* Category Header Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-md group-hover:border-cyan-500/40 transition-colors shadow-sm">
                    {getCategoryHeaderIcon(category.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    CAT 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {category.title}
                </h3>

                {category.description && (
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {category.description}
                  </p>
                )}

                {/* Skills List */}
                <div className="mt-6 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-white/[0.15] backdrop-blur-md transition-all"
                    >
                      <div className="p-1.5 rounded-xl bg-slate-800/60 border border-white/[0.06]">
                        {getSkillIcon(skill)}
                      </div>
                      <span className="text-sm font-medium text-slate-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>{category.skills.length} Key Competencies</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-cyan-300 animate-pulse transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
