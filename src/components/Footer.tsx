import React from 'react';
import { ArrowUp, Instagram, AtSign, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#020617] text-[#94A3B8] py-12 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          
          {/* Personal Branding & Role */}
          <div className="text-center md:text-left">
            <div className="flex items-baseline justify-center md:justify-start gap-1 text-xl font-black tracking-tight text-[#F8FAFC] mb-1">
              <span>MRF</span>
              <span className="w-2 h-2 bg-[#3B82F6] rounded-[1px] shadow-[0_0_8px_rgba(59,130,246,0.9)] inline-block align-baseline" />
              <span className="text-[#94A3B8] font-normal ml-2 text-sm sm:text-base">| Muhammad Raihan Firdaus</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Admin Assistant • Administrative Support • Social Media
            </p>
            <p className="text-xs text-[#94A3B8] mt-1">
              Instagram / Threads:{' '}
              <a
                href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#60A5FA] hover:text-[#22D3EE] transition-colors"
              >
                {PERSONAL_INFO.instagram}
              </a>
            </p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-full bg-[#071329]/80 border border-white/[0.08] hover:border-pink-500/40 text-slate-400 hover:text-pink-400 transition-all backdrop-blur-md"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`https://threads.net/@${PERSONAL_INFO.threads.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="p-2.5 rounded-full bg-[#071329]/80 border border-white/[0.08] hover:border-white/30 text-slate-400 hover:text-white transition-all backdrop-blur-md"
            >
              <AtSign className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2.5 rounded-full bg-[#071329]/80 border border-white/[0.08] hover:border-[#22D3EE]/40 text-slate-400 hover:text-[#22D3EE] transition-all backdrop-blur-md"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2.5 rounded-full bg-gradient-to-tr from-[#3B82F6]/30 to-[#22D3EE]/30 hover:from-[#3B82F6] hover:to-[#22D3EE] text-[#60A5FA] hover:text-white border border-[#3B82F6]/40 transition-all cursor-pointer ml-2 shadow-lg shadow-[#3B82F6]/10"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Muhammad Raihan Firdaus. All rights reserved.</p>
          <p className="tracking-wider uppercase text-[11px] font-mono text-slate-500">MRF • MORPHISM PORTFOLIO</p>
        </div>
      </div>
    </footer>
  );
};
