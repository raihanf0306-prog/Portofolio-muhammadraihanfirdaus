import React from 'react';
import { ArrowUp, Instagram, AtSign, Mail, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-black text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Personal Branding & Role */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-xl font-bold tracking-tight text-white mb-1">
              <span>MRF</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block ml-0.5"></span>
              <span className="text-slate-500 font-normal ml-2 text-base">| Muhammad Raihan Firdaus</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Admin Assistant • Administrative Support • Social Media
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Instagram / Threads:{' '}
              <a
                href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {PERSONAL_INFO.instagram}
              </a>
            </p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`https://threads.net/@${PERSONAL_INFO.threads.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <AtSign className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2.5 rounded-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 transition-all cursor-pointer ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Muhammad Raihan Firdaus. All rights reserved.</p>
          <p>Built as a Personal Portfolio • Karawang, Jawa Barat</p>
        </div>
      </div>
    </footer>
  );
};
