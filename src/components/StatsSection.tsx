import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, Users, Award } from 'lucide-react';
import { QUICK_STATS } from '../data/portfolioData';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'stat-exp': 0,
    'stat-coord': 0,
    'stat-threads': 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numeric counters
          const duration = 1200;
          const steps = 30;
          const intervalTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
              'stat-exp': Math.min(5, Math.round(5 * progress)),
              'stat-coord': Math.min(1, Math.round(1 * progress)),
              'stat-threads': Math.min(9, Math.round(9 * progress)),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getIcon = (id: string) => {
    switch (id) {
      case 'stat-exp':
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'stat-coord':
        return <Calendar className="w-5 h-5 text-blue-300" />;
      case 'stat-threads':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'stat-bnsp':
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-400" />;
    }
  };

  const getDisplayValue = (stat: (typeof QUICK_STATS)[0]) => {
    if (stat.numericTarget && counts[stat.id] !== undefined) {
      if (stat.id === 'stat-threads') {
        return `${counts[stat.id]}K+`;
      }
      if (stat.id === 'stat-exp') {
        return `${counts[stat.id]}+ Years`;
      }
      if (stat.id === 'stat-coord') {
        return `${counts[stat.id]} Year`;
      }
    }
    return stat.value;
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {QUICK_STATS.map((stat, idx) => (
          <motion.div
            key={stat.id}
            id={`quick-stat-card-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/95 via-[#0B1120] to-[#020617] border border-slate-800/90 hover:border-blue-500/50 shadow-xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            {/* Top row with icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-900/50 group-hover:border-blue-500/40 group-hover:bg-blue-900/40 transition-colors">
                {getIcon(stat.id)}
              </div>
              <span className="text-[11px] font-semibold text-blue-400/80 uppercase tracking-wider">
                0{idx + 1}
              </span>
            </div>

            {/* Stat value */}
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-blue-200 transition-colors">
              {getDisplayValue(stat)}
            </div>

            {/* Label */}
            <h4 className="mt-2 text-sm sm:text-base font-semibold text-slate-200">
              {stat.label}
            </h4>

            {/* Sublabel */}
            {stat.sublabel && (
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                {stat.sublabel}
              </p>
            )}

            {/* Subtle bottom line accent */}
            <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 group-hover:via-blue-500/60 to-transparent transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
