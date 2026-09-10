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
        return <Users2 className="w-6 h-6 text-indigo-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#0B1120] text-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/50 border border-blue-600/40 text-blue-300 text-xs font-bold tracking-wider uppercase mb-3">
            07 — CORE COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
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
              className="group p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 shadow-xl shadow-black/30 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Category Header Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-blue-500/40 transition-colors">
                    {getCategoryHeaderIcon(category.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    CAT 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                  {category.title}
                </h3>

                {category.description && (
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {category.description}
                  </p>
                )}

                {/* Skills List */}
                <div className="mt-6 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 group-hover:border-slate-800 hover:bg-slate-800/40 transition-all"
                    >
                      <div className="p-1.5 rounded-lg bg-slate-900">
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
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>{category.skills.length} Key Competencies</span>
                <span className="w-2 h-2 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
