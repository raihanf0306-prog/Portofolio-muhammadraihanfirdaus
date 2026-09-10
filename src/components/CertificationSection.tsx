import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  CheckCircle2, 
  Eye, 
  X, 
  ShieldCheck, 
  FileCheck2,
  Calendar,
  Hash,
  ExternalLink
} from 'lucide-react';
import { CERTIFICATION_DATA } from '../data/portfolioData';
import { useCertificatePhoto } from '../utils/photoStore';
import { MorphBackgroundDecor } from './MorphBackgroundDecor';

export const CertificationSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Preserve whatever certificate the user has uploaded in localStorage, or fallback to default
  const { certPhoto } = useCertificatePhoto();

  return (
    <section
      id="certification"
      className="relative py-24 sm:py-32 bg-[#080C19] text-slate-100 overflow-hidden"
    >
      {/* Morph background blobs */}
      <MorphBackgroundDecor variant="subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md">
            {CERTIFICATION_DATA.subtitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {CERTIFICATION_DATA.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Validasi kompetensi nasional berstandar BNSP (Badan Nasional Sertifikasi Profesi) dalam bidang pembuatan konten dan pemasaran digital.
          </p>
        </div>

        {/* Main Certification Card */}
        <div className="mt-12 rounded-3xl morph-card border border-white/[0.08] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Details & Competencies */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                {/* Certification Badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-wider backdrop-blur-md">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>{CERTIFICATION_DATA.badge}</span>
                  </span>
                  <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-emerald-400" />
                    <span>Terverifikasi Resmi BNSP Indonesia</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 leading-tight">
                  {CERTIFICATION_DATA.headline}
                </h3>

                {/* Description */}
                <p className="mt-4 text-base text-slate-200 leading-relaxed font-normal">
                  {CERTIFICATION_DATA.description}
                </p>

                {/* Credential Metadata Pill Grid */}
                <div className="mt-6 p-5 rounded-2xl bg-slate-900/50 border border-white/[0.06] backdrop-blur-md grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Hash className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 font-medium">No. Sertifikat:</span>
                      <p className="font-bold text-white select-all">{CERTIFICATION_DATA.certificateNo}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Hash className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 font-medium">No. Registrasi:</span>
                      <p className="font-bold text-white select-all">{CERTIFICATION_DATA.regNo}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 font-medium">Lembaga Sertifikasi:</span>
                      <p className="font-bold text-white">{CERTIFICATION_DATA.issuingBody}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 font-medium">Tanggal Ditetapkan:</span>
                      <p className="font-bold text-white">{CERTIFICATION_DATA.issueDate} ({CERTIFICATION_DATA.validity})</p>
                    </div>
                  </div>
                </div>

                {/* Competencies Grid */}
                <div className="mt-6 pt-6 border-t border-white/[0.08]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Ruang Lingkup Kompetensi Teruji
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CERTIFICATION_DATA.competencies.map((comp, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-white/[0.06] hover:border-amber-400/30 transition-colors backdrop-blur-md"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {comp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Preview & Buka Tab Baru */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                <button
                  id="view-certificate-btn"
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full morph-btn-primary text-white font-bold text-xs uppercase tracking-wide shadow-lg shadow-indigo-500/30 transition-all cursor-pointer hover:scale-105"
                >
                  <Eye className="w-4 h-4" />
                  <span>Lihat Dokumen Sertifikat</span>
                </button>

                <a
                  href={certPhoto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full morph-btn-secondary text-slate-200 font-bold text-xs uppercase tracking-wide transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Buka Tab Baru</span>
                </a>
              </div>
            </div>

            {/* Right Column: Certificate Image Visual Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900/80 via-[#0B1226]/90 to-[#070A14] p-6 sm:p-10 flex flex-col items-center justify-center relative text-white border-t lg:border-t-0 lg:border-l border-white/[0.08]">
              
              {/* Certificate Frame with Interactive Hover */}
              <div 
                className="relative z-10 w-full max-w-sm rounded-3xl bg-slate-900/60 border border-white/[0.12] hover:border-amber-400/60 transition-all duration-300 shadow-2xl group overflow-hidden p-3 backdrop-blur-xl"
              >
                {/* Certificate Preview Image */}
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center cursor-pointer border border-white/[0.08]"
                  title="Klik untuk memperbesar dokumen sertifikat"
                >
                  <img
                    src={certPhoto}
                    alt="Sertifikat Kompetensi BNSP Muhammad Raihan Firdaus"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/bnsp_certificate.jpg';
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Preview */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2.5 backdrop-blur-xs">
                    <div className="p-3.5 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-xl">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">
                      Klik untuk Memperbesar
                    </span>
                  </div>

                  {/* Verified Ribbon */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 border border-amber-500/50 text-amber-300 text-[10px] font-bold backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>BNSP INDONESIA</span>
                  </div>
                </div>

                {/* Card Sub-info */}
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-3.5 px-2 py-1 flex items-center justify-between text-left cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div>
                    <p className="text-xs font-bold text-white">Sertifikat Kompetensi</p>
                    <p className="text-[11px] text-slate-400">Content Creator — Pemasaran Digital</p>
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Perbesar &rarr;
                  </span>
                </div>
              </div>

              {/* Trust & Verification Footnote */}
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                <span>Dokumen Resmi Terdaftar & Terverifikasi</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal for Certificate */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            id="certificate-modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] morph-card border border-white/[0.15] rounded-3xl p-5 sm:p-7 shadow-2xl text-white flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Sertifikat Kompetensi BNSP</h3>
                    <p className="text-xs text-slate-400">
                      Muhammad Raihan Firdaus &bull; Content Creator (Pemasaran Digital)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={certPhoto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/[0.08]"
                    title="Buka gambar ukuran penuh"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-white/[0.08]"
                    title="Tutup modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Certificate Image in Modal */}
              <div className="my-4 flex-1 min-h-0 rounded-2xl bg-black/60 border border-white/[0.08] p-2 sm:p-4 flex items-center justify-center overflow-auto">
                <img
                  src={certPhoto}
                  alt="Sertifikat Kompetensi BNSP Muhammad Raihan Firdaus"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/bnsp_certificate.jpg';
                  }}
                  className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Footer Credentials Info */}
              <div className="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span>No. Sertifikat: <strong className="text-slate-200">{CERTIFICATION_DATA.certificateNo}</strong></span>
                  <span>No. Reg: <strong className="text-slate-200">{CERTIFICATION_DATA.regNo}</strong></span>
                  <span>LSP: <strong className="text-slate-200">Teknologi Digital</strong></span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs transition-colors shrink-0 border border-white/[0.08]"
                >
                  Tutup Tampilan
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};


