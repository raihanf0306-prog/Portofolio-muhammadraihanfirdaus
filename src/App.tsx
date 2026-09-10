import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { DigitalSection } from './components/DigitalSection';
import { CertificationSection } from './components/CertificationSection';
import { SkillsSection } from './components/SkillsSection';
import { CareerInterestSection } from './components/CareerInterestSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white relative bg-morph-mesh">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Quick Stats Highlights */}
        <StatsSection />

        {/* 01 - About Me */}
        <AboutSection />

        {/* 02 - 04 Administrative, Event & Coordinator Experience */}
        <ExperienceSection />

        {/* 05 - Digital & Social Media Growth */}
        <DigitalSection />

        {/* 06 - BNSP Certification */}
        <CertificationSection />

        {/* 07 - Skills & Capabilities */}
        <SkillsSection />

        {/* Career Interests - Currently Open For */}
        <CareerInterestSection />

        {/* Contact & CTA Section */}
        <ContactSection />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}
