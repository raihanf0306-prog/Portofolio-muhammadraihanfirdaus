import React, { useState } from 'react';
import { CinematicIntro } from './components/CinematicIntro';
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
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('mrf_intro_seen');
    }
    return true;
  });

  const handleIntroComplete = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('mrf_intro_seen', 'true');
    }
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white relative bg-morph-mesh">
      {/* Cinematic Tech Intro (Only on initial load) */}
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}

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

