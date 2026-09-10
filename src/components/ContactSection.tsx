import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Instagram, 
  AtSign, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight,
  Phone
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoStore';
import { MorphBackgroundDecor } from './MorphBackgroundDecor';

export const ContactSection: React.FC = () => {
  const { photo } = useProfilePhoto();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [quickName, setQuickName] = useState('');
  const [quickCompany, setQuickCompany] = useState('');
  const [quickRole, setQuickRole] = useState('Admin Assistant');
  const [quickNote, setQuickNote] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendCustomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = quickName ? `Halo Raihan, saya ${quickName}${quickCompany ? ` dari ${quickCompany}` : ''}.` : 'Halo Raihan,';
    const body = `Saya tertarik untuk mendiskusikan posisi/peluang sebagai ${quickRole}.${quickNote ? ` Catatan: ${quickNote}` : ''}`;
    const text = encodeURIComponent(`${greeting} ${body}`);
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#060913] text-slate-100 overflow-hidden"
    >
      {/* Morph background blobs */}
      <MorphBackgroundDecor variant="dynamic" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative rounded-[2.5rem] morph-card-glow p-8 sm:p-14 lg:p-16 backdrop-blur-2xl overflow-hidden border border-white/[0.12] shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md">
                GET IN TOUCH
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Let’s Work Together!
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Saya siap belajar, beradaptasi, dan memberikan kontribusi terbaik dalam setiap tanggung jawab yang diberikan.
              </p>

              {/* Main 2 CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="contact-btn-whatsapp"
                  href="https://wa.me/6285718048258?text=Halo%20Raihan,%20saya%20tertarik%20dengan%20portofolio%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full morph-btn-primary text-white font-black text-xs uppercase tracking-wide shadow-xl shadow-indigo-500/30 transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Chat via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </a>

                <a
                  id="contact-btn-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full morph-btn-secondary text-slate-200 font-bold text-xs uppercase tracking-wide transition-all duration-200 hover:scale-105"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>Send Email</span>
                </a>
              </div>

              {/* Contact Credentials List */}
              <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                
                {/* Name & Location */}
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <img
                      src={photo}
                      alt={PERSONAL_INFO.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = '/raihan.jpg';
                      }}
                      className="w-12 h-12 rounded-full object-cover object-top border-2 border-cyan-400/40 shadow-sm shrink-0"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#060913]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Nama Lengkap</p>
                    <p className="text-base font-bold text-white leading-tight mt-0.5">{PERSONAL_INFO.name}</p>
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 mt-0.5 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">WhatsApp</p>
                  <a
                    href="https://wa.me/6285718048258?text=Halo%20Raihan,%20saya%20tertarik%20dengan%20portofolio%20Anda."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-emerald-400 transition-colors mt-1"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{PERSONAL_INFO.whatsapp}</span>
                  </a>
                </div>

                {/* Email with copy button */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Address</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold text-slate-200 truncate">
                      {PERSONAL_INFO.email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/[0.08]"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Social Profiles */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Media Sosial</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <a
                      href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/60 border border-white/[0.08] text-xs font-semibold text-slate-300 hover:text-pink-400 transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>{PERSONAL_INFO.instagram}</span>
                    </a>
                    <a
                      href={`https://threads.net/@${PERSONAL_INFO.threads.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/60 border border-white/[0.08] text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <AtSign className="w-3.5 h-3.5" />
                      <span>{PERSONAL_INFO.threads}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Interactive Quick Message Composer */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Send className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Direct Message Generator</h3>
              </div>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed font-normal">
                Kirim pesan cepat langsung ke WhatsApp Raihan dengan template yang rapi.
              </p>

              <form onSubmit={handleSendCustomWhatsApp} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nama Anda / HR
                  </label>
                  <input
                    type="text"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    placeholder="Contoh: Bu Sarah / Pak Dimas"
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-950/60 border border-white/[0.08] text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Perusahaan / Instansi (Opsional)
                  </label>
                  <input
                    type="text"
                    value={quickCompany}
                    onChange={(e) => setQuickCompany(e.target.value)}
                    placeholder="Contoh: PT Kreasi Digital / Sekolah..."
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-950/60 border border-white/[0.08] text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Peluang Posisi
                  </label>
                  <select
                    value={quickRole}
                    onChange={(e) => setQuickRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-950/60 border border-white/[0.08] text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Admin Assistant" className="bg-slate-900 text-white">Admin Assistant</option>
                    <option value="Admin Support" className="bg-slate-900 text-white">Admin Support</option>
                    <option value="Social Media Admin" className="bg-slate-900 text-white">Social Media Admin</option>
                    <option value="Event / Activity Coordinator" className="bg-slate-900 text-white">Event / Activity Coordinator</option>
                    <option value="Remote / WFH Project" className="bg-slate-900 text-white">Remote / WFH Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Catatan Tambahan
                  </label>
                  <textarea
                    rows={2}
                    value={quickNote}
                    onChange={(e) => setQuickNote(e.target.value)}
                    placeholder="Tuliskan jadwal interview atau detail singkat..."
                    className="w-full px-3.5 py-2 rounded-2xl bg-slate-950/60 border border-white/[0.08] text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-full morph-btn-primary text-white font-bold text-xs uppercase tracking-wide shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim Pesan ke WhatsApp</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
