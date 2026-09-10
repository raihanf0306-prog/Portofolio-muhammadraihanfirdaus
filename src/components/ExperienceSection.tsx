import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  Users, 
  MessageSquare, 
  FileSpreadsheet, 
  CheckSquare, 
  Calendar, 
  Clock, 
  Sparkles, 
  Camera, 
  Upload, 
  Compass, 
  Layers, 
  CheckCircle,
  Quote
} from 'lucide-react';
import { ADMINISTRATIVE_EXPERIENCES } from '../data/portfolioData';
import { MorphBackgroundDecor } from './MorphBackgroundDecor';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ppdb' | 'openhouse' | 'coordinator'>('all');
  const [eventPhotos, setEventPhotos] = useState<{ [key: number]: string }>({});

  const handlePhotoUpload = (slotIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setEventPhotos((prev) => ({
            ...prev,
            [slotIndex]: event.target?.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const ppdbExp = ADMINISTRATIVE_EXPERIENCES.find((e) => e.id === 'exp-ppdb')!;
  const openHouseExp = ADMINISTRATIVE_EXPERIENCES.find((e) => e.id === 'exp-openhouse')!;
  const coordinatorExp = ADMINISTRATIVE_EXPERIENCES.find((e) => e.id === 'exp-coordinator')!;

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#070A13] text-slate-100 overflow-hidden"
    >
      {/* Morph graphic background */}
      <MorphBackgroundDecor variant="subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md">
              02 — EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Administrative Experience
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl font-normal">
              Pengalaman nyata dalam alur administrasi sekolah, koordinasi kegiatan siswa, serta pelayanan komunikasi publik.
            </p>
          </div>

          {/* Filter Pill Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-xl shadow-lg shadow-black/20">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Semua Pengalaman
            </button>
            <button
              onClick={() => setActiveTab('ppdb')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all ${
                activeTab === 'ppdb'
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              PPDB
            </button>
            <button
              onClick={() => setActiveTab('openhouse')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all ${
                activeTab === 'openhouse'
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Open House
            </button>
            <button
              onClick={() => setActiveTab('coordinator')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all ${
                activeTab === 'coordinator'
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Koordinator
            </button>
          </div>
        </div>

        {/* Experience List Container */}
        <div className="mt-12 space-y-12">
          
          {/* CARD 1: Admin PPDB */}
          {(activeTab === 'all' || activeTab === 'ppdb') && (
            <motion.div
              id="experience-card-ppdb"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-8 sm:p-10 rounded-3xl morph-card hover:border-blue-500/40 shadow-2xl relative overflow-hidden transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      Adm. Experience #01
                    </span>
                    <span className="text-xs text-slate-400">Lingkungan Pendidikan</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    {ppdbExp.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-cyan-300 mt-1">
                    {ppdbExp.subtitle}
                  </p>
                </div>

                {/* Key Icons */}
                <div className="flex items-center gap-2 p-2 rounded-2xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-md shrink-0">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30" title="Database & Pendataan">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30" title="Pelayanan Calon Siswa & Orang Tua">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30" title="Komunikasi & Informasi">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="p-2 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30" title="Pengecekan Berkas">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30" title="Checklist Administrasi">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Description & Responsibilities */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Konteks & Peran</h4>
                  <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {ppdbExp.description}
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
                    <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2.5">Core Focus</p>
                    <div className="flex flex-wrap gap-2">
                      {ppdbExp.highlights?.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1 rounded-full bg-blue-500/10 text-cyan-200 text-xs font-medium border border-blue-500/30"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ppdbExp.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-blue-500/30 backdrop-blur-md transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200 leading-snug font-normal">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* CARD 2: Admin & Panitia Open House */}
          {(activeTab === 'all' || activeTab === 'openhouse') && (
            <motion.div
              id="experience-card-openhouse"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-8 sm:p-10 rounded-3xl morph-card hover:border-violet-500/40 shadow-2xl relative overflow-hidden transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="px-3.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    03 — EVENT & OPEN HOUSE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    {openHouseExp.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-violet-300 mt-1">
                    {openHouseExp.subtitle}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] text-slate-300 text-xs font-medium backdrop-blur-md">
                  <Calendar className="w-4 h-4 text-violet-400" />
                  <span>Event Coordination & Ops</span>
                </div>
              </div>

              {/* Responsibilities & Description */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Deskripsi</h4>
                  <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {openHouseExp.description}
                  </p>

                  {/* Big Quote / Highlight Banner */}
                  <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-violet-950/40 via-slate-900/60 to-slate-950/80 border border-violet-500/30 backdrop-blur-md">
                    <Quote className="w-6 h-6 text-violet-400 opacity-70 mb-2" />
                    <p className="text-sm font-bold text-white tracking-wide leading-relaxed">
                      {openHouseExp.quote}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Tanggung Jawab
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {openHouseExp.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-violet-500/30 backdrop-blur-md transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200 leading-snug font-normal">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Event Documentation Gallery Placeholders */}
              <div className="mt-8 pt-8 border-t border-white/[0.08]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Camera className="w-4 h-4 text-cyan-400" />
                      <span>Dokumentasi Event (Placeholder Area)</span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Placeholder 4 slot dokumentasi asli. Anda dapat melihat slot kosong atau mengunggah foto untuk preview instan.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((slot) => (
                    <div
                      key={slot}
                      className="relative group/slot aspect-[4/3] rounded-2xl bg-slate-900/40 border border-dashed border-white/[0.12] hover:border-cyan-500/50 overflow-hidden flex flex-col items-center justify-center p-3 text-center transition-all backdrop-blur-md"
                    >
                      {eventPhotos[slot] ? (
                        <div className="relative w-full h-full">
                          <img
                            src={eventPhotos[slot]}
                            alt={`Dokumentasi Event Slot ${slot}`}
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const copy = { ...eventPhotos };
                              delete copy[slot];
                              setEventPhotos(copy);
                            }}
                            className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/80 text-white text-[10px] hover:bg-red-600 px-2 py-0.5 backdrop-blur-sm transition-colors"
                          >
                            Hapus
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="p-2.5 rounded-xl bg-slate-800/60 border border-white/[0.08] text-slate-400 group-hover/slot:text-cyan-300 group-hover/slot:border-cyan-500/40 transition-colors">
                            <Camera className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-semibold text-slate-200 mt-2">
                            Dokumentasi #{slot}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-0.5">
                            Event Slot
                          </span>
                          
                          <label className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.08] hover:bg-blue-600 text-slate-300 hover:text-white text-[10px] font-semibold cursor-pointer transition-colors border border-white/[0.08]">
                            <Upload className="w-3 h-3" />
                            <span>Pilih Foto</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handlePhotoUpload(slot, e)}
                              className="hidden"
                            />
                          </label>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CARD 3: Koordinator Kegiatan */}
          {(activeTab === 'all' || activeTab === 'coordinator') && (
            <motion.div
              id="experience-card-coordinator"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-8 sm:p-10 rounded-3xl morph-card hover:border-cyan-500/40 shadow-2xl relative overflow-hidden transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      04 — COORDINATOR EXPERIENCE
                    </span>
                    <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold backdrop-blur-md">
                      <Clock className="w-3 h-3" />
                      <span>± 1 Tahun</span>
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    {coordinatorExp.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-slate-300 mt-1">
                    Koordinasi Program & Kegiatan Siswa Kelas 1–6
                  </p>
                </div>
              </div>

              {/* Content & Responsibilities */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Tanggung Jawab Utama</h4>
                  <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {coordinatorExp.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Skill Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {coordinatorExp.skills?.map((sk) => (
                        <div
                          key={sk}
                          className="px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] text-cyan-200 text-xs font-bold backdrop-blur-md shadow-xs hover:border-cyan-500/30 transition-colors"
                        >
                          {sk}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {coordinatorExp.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-cyan-500/30 backdrop-blur-md transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200 leading-snug font-normal">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
