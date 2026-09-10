import { ContactInfo, ExperienceItem, SkillCategory, StatItem } from '../types';

export const PROFILE_PHOTO_URL = 'https://cdn.lynkid.my.id/draft-products/10-09-2026/1789043066257_3696463.jpeg?format=webp';
export const OFFICIAL_CERTIFICATE_URL = 'https://cdn.lynkid.my.id/draft-products/10-09-2026/1789049059455_8304441.jpeg?format=webp';

export const PERSONAL_INFO: ContactInfo = {
  name: 'Muhammad Raihan Firdaus',
  roles: ['Admin Assistant', 'Administrative Support', 'Social Media'],
  location: 'Karawang, Jawa Barat',
  whatsapp: '0857-1804-8258',
  whatsappNumber: '6285718048258',
  whatsappLink: 'https://wa.me/6285718048258?text=Halo%20Raihan,%20saya%20tertarik%20dengan%20portofolio%20Anda.',
  email: 'muhammadraihanf672@gmail.com',
  instagram: '@raihanfirdaus.id',
  threads: '@raihanfirdaus.id',
  avatar: PROFILE_PHOTO_URL,
};

export const WHATSAPP_LINK = 'https://wa.me/6285718048258?text=Halo%20Raihan,%20saya%20tertarik%20dengan%20portofolio%20Anda.';

export const BRAND_TRAITS = [
  'Organized',
  'Communicative',
  'Detail-Oriented',
];

export const QUICK_STATS: StatItem[] = [
  {
    id: 'stat-exp',
    value: '5+',
    numericTarget: 5,
    suffix: '+ Years',
    label: 'Professional Experience',
    sublabel: 'Di lingkungan pendidikan & operasional',
  },
  {
    id: 'stat-coord',
    value: '1 Year',
    numericTarget: 1,
    suffix: ' Year',
    label: 'Activity Coordinator',
    sublabel: 'Mengelola program siswa & tim panitia',
  },
  {
    id: 'stat-threads',
    value: '9K+',
    numericTarget: 9,
    suffix: 'K+',
    label: 'Organic Threads Followers',
    sublabel: 'Pertumbuhan organik dalam ~3 bulan',
  },
  {
    id: 'stat-bnsp',
    value: 'BNSP',
    label: 'Certified Content Creator',
    sublabel: 'Kompetensi Pemasaran Digital',
  },
];

export const ABOUT_ME_DATA = {
  intro: 'Halo! Saya Muhammad Raihan Firdaus, lulusan S1 Pendidikan Bahasa Arab dari STIT Hidayatunnajah Bekasi dengan pengalaman 5 tahun bekerja di lingkungan pendidikan.',
  paragraph1: 'Selain mengajar, saya dipercaya terlibat dalam berbagai kebutuhan administrasi, pelayanan informasi, serta pelaksanaan event sekolah, seperti PPDB, Open House, dan berbagai program siswa.',
  paragraph2: 'Saya juga pernah menjadi Koordinator Kegiatan selama 1 tahun, yang membentuk kemampuan saya dalam mengatur pekerjaan, berkomunikasi dengan banyak pihak, bekerja dengan timeline, serta berkolaborasi dalam tim.',
  paragraph3: 'Saat ini saya terbuka untuk kesempatan sebagai Admin Assistant, Admin Support, Social Media Admin, maupun posisi Remote/WFH lainnya yang relevan.',
  pillars: [
    {
      title: 'Organized',
      desc: 'Terbiasa bekerja dengan administrasi, timeline, dan koordinasi kegiatan secara terstruktur.',
      icon: 'CalendarCheck',
    },
    {
      title: 'Communicative',
      desc: 'Terbiasa berkomunikasi dengan tim, orang tua, peserta, dan berbagai pihak dengan responsif.',
      icon: 'MessageSquare',
    },
    {
      title: 'Detail-Oriented',
      desc: 'Terbiasa melakukan pendataan teliti, pengecekan informasi, dan administrasi tanpa celah.',
      icon: 'CheckCircle2',
    },
  ],
};

export const ADMINISTRATIVE_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-ppdb',
    title: 'Admin PPDB',
    subtitle: 'Penerimaan Peserta Didik Baru',
    description: 'Dalam kegiatan PPDB, saya terlibat membantu proses administrasi dan pelayanan informasi kepada calon orang tua/wali siswa.',
    responsibilities: [
      'Membantu pendataan calon peserta didik',
      'Memberikan informasi terkait proses PPDB',
      'Membantu pengecekan data pendaftaran',
      'Menangani komunikasi dengan calon orang tua/wali siswa',
      'Berkoordinasi dengan tim PPDB',
      'Membantu kebutuhan administrasi selama proses penerimaan berlangsung',
    ],
    highlights: ['Detail-Oriented', 'Responsive', 'Communicative', 'Organized'],
    icons: ['Database', 'Users', 'MessageCircle', 'FileSpreadsheet', 'CheckSquare'],
  },
  {
    id: 'exp-openhouse',
    title: 'Admin & Panitia Open House',
    subtitle: 'Event & School Open House',
    description: 'Saya dipercaya terlibat dalam pelaksanaan Open House sekolah dan beberapa kegiatan lainnya.',
    responsibilities: [
      'Administrasi dan pendataan peserta',
      'Penyampaian informasi kegiatan',
      'Koordinasi dengan tim/panitia',
      'Persiapan kebutuhan acara',
      'Dokumentasi kegiatan',
      'Membantu operasional pada hari pelaksanaan',
    ],
    quote: 'Communication — Coordination — Administration — Teamwork',
    hasGallery: true,
  },
  {
    id: 'exp-coordinator',
    title: 'Koordinator Kegiatan',
    badge: '± 1 Tahun',
    description: 'Saya pernah dipercaya sebagai Koordinator Kegiatan yang bertanggung jawab membantu mengoordinasikan berbagai program dan kegiatan siswa kelas 1–6.',
    responsibilities: [
      'Mengatur dan mengoordinasikan kegiatan bersama tim',
      'Menyampaikan informasi kepada pihak terkait',
      'Membantu pembagian tugas',
      'Memantau kesiapan kegiatan',
      'Mengelola kebutuhan administrasi kegiatan',
      'Berkoordinasi dengan guru dan panitia',
      'Memastikan kegiatan berjalan sesuai rencana',
    ],
    skills: [
      'Leadership',
      'Problem Solving',
      'Time Management',
      'Teamwork',
      'Communication',
    ],
  },
];

export const DIGITAL_MEDIA_DATA = {
  title: 'Digital & Social Media',
  subtitle: '05 — DIGITAL EXPERIENCE',
  description: 'Selain pengalaman administrasi, saya aktif mengembangkan kemampuan dalam bidang Content Creation dan Digital Marketing.',
  metrics: [
    {
      value: '9,000+',
      label: 'Organic Followers',
      caption: 'Mengembangkan akun Threads secara organik hingga lebih dari 9.000 followers dalam sekitar 3 bulan.',
      badge: 'Threads Growth',
    },
    {
      value: 'Omzet 2 Digit',
      label: 'Monetization & Sales',
      caption: 'Menghasilkan omzet 2 digit dalam waktu sekitar 3 bulan melalui Threads.',
      badge: 'Digital Impact',
    },
  ],
  skills: [
    'Social Media Management',
    'Content Creation',
    'Copywriting',
    'Content Planning',
    'Digital Marketing',
    'Canva',
    'Basic Content Analysis',
  ],
};

export const CERTIFICATION_DATA = {
  title: 'Certification',
  subtitle: '06 — PROFESSIONAL CERTIFICATION',
  badge: 'BNSP CERTIFIED',
  headline: 'CONTENT CREATOR — PEMASARAN DIGITAL',
  description: 'Saya telah memiliki sertifikasi kompetensi resmi BNSP (Badan Nasional Sertifikasi Profesi) sebagai Content Creator dalam bidang Pemasaran Digital yang diterbitkan oleh LSP Teknologi Digital. Sertifikasi ini mendukung kompetensi profesional saya dalam:',
  certificateNo: '61929 2166 3 0169986 2026',
  regNo: 'TIK 1565 54675 2026',
  blankoNo: '13562747',
  issuingBody: 'Lembaga Sertifikasi Profesi (LSP) Teknologi Digital & BNSP',
  issueDate: '11 April 2026',
  validity: '3 (Tiga) Tahun',
  imageUrl: OFFICIAL_CERTIFICATE_URL,
  competencies: [
    'Membuat dan merencanakan konten digital',
    'Memahami target audiens & segmentasi pasar',
    'Copywriting & storytelling komunikasi digital',
    'Pengelolaan dan optimasi media sosial',
    'Komunikasi digital publik & visual',
    'Pemasaran digital terpadu (Digital Marketing)',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'admin-skills',
    title: 'Administrative Skills',
    description: 'Kemampuan teknis dan manajerial dalam mengelola alur kerja administratif, data, serta pengarsipan.',
    skills: [
      'Data Entry',
      'Administrasi Kegiatan',
      'Pengelolaan Data',
      'Dokumentasi',
      'Pengarsipan',
      'Event Administration',
      'Time Management',
    ],
  },
  {
    id: 'digital-skills',
    title: 'Digital Skills',
    description: 'Penguasaan alat digital untuk kolaborasi tim, kreasi visual, strategi konten, dan komunikasi daring.',
    skills: [
      'Google Workspace',
      'Microsoft Office',
      'Canva',
      'Social Media Management',
      'Content Creation',
      'Copywriting',
      'Digital Marketing',
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    description: 'Atribut interpersonal dan pola pikir pemecahan masalah untuk kolaborasi tim yang harmonis.',
    skills: [
      'Communication',
      'Teamwork',
      'Problem Solving',
      'Adaptability',
      'Detail-Oriented',
      'Fast Learner',
      'Responsibility',
    ],
  },
];

export const CAREER_INTERESTS = [
  {
    id: 'role-assistant',
    title: 'Admin Assistant',
    desc: 'Mendukung efisiensi operasional harian, pengelolaan jadwal, dokumentasi, dan korespondensi.',
    icon: 'Briefcase',
  },
  {
    id: 'role-support',
    title: 'Admin Support',
    desc: 'Memastikan integritas data, alur kerja administratif rapi, dan pelayanan informasi prima.',
    icon: 'FolderCheck',
  },
  {
    id: 'role-socmed',
    title: 'Social Media Admin',
    desc: 'Mengelola komunikasi audiens, perencanaan konten, publikasi, dan interaksi komunitas media sosial.',
    icon: 'Share2',
  },
  {
    id: 'role-remote',
    title: 'Remote / WFH Opportunities',
    desc: 'Siap bekerja fleksibel lintas jarak dengan komunikasi transparan, disiplin timeline, dan hasil terukur.',
    icon: 'Laptop',
  },
];
