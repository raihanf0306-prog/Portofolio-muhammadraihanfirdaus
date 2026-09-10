import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoStore';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Digital', href: '#digital' },
  { label: 'Certification', href: '#certification' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { photo } = useProfilePhoto();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A13]/75 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white group"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500 opacity-60 blur-xs group-hover:opacity-100 transition-opacity" />
              <img
                src={photo}
                alt="Muhammad Raihan Firdaus"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/raihan.jpg';
                }}
                className="relative w-8 h-8 rounded-full object-cover object-top border border-white/20 shadow-sm"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-white font-extrabold tracking-tight group-hover:text-blue-200 transition-colors">MRF</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-125 transition-all inline-block shadow-xs shadow-cyan-400"></span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/50 border border-white/[0.08] backdrop-blur-md shadow-lg shadow-black/20">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-1.5 text-xs tracking-wide uppercase font-semibold rounded-full transition-all duration-250 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="navbar-cta-whatsapp"
              href="https://wa.me/6285718048258?text=Halo%20Raihan,%20saya%20tertarik%20dengan%20portofolio%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full morph-btn-primary text-white text-xs uppercase tracking-wider font-bold transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-2xl bg-slate-900/60 border border-white/[0.08] text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors backdrop-blur-md"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div
            id="mobile-dropdown-menu"
            className="lg:hidden mt-3 p-4 rounded-3xl bg-[#0B1120]/90 border border-white/[0.1] backdrop-blur-2xl shadow-2xl shadow-black/70 animate-in fade-in slide-in-from-top-3 duration-200"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/30 to-violet-600/30 text-blue-300 border border-blue-500/30 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/[0.08]">
                <a
                  href="https://wa.me/6285718048258?text=Halo%20Raihan,%20saya%20tertarik%20dengan%20portofolio%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl morph-btn-primary text-white font-bold text-xs uppercase tracking-wider shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact Me on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
