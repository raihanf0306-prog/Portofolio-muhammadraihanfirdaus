export interface StatItem {
  id: string;
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export interface ResponsibilityItem {
  id: string;
  text: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  highlights?: string[];
  skills?: string[];
  quote?: string;
  icons?: string[];
  hasGallery?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  description?: string;
}

export interface ContactInfo {
  name: string;
  roles: string[];
  location: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappLink?: string;
  email: string;
  instagram: string;
  threads: string;
  avatar?: string;
}
