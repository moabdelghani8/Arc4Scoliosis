import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { TeamSection } from './sections/TeamSection';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';
import { SiteContent } from '../types';

interface WebsiteProps {
  siteContent: SiteContent;
}

export function Website({ siteContent }: WebsiteProps) {
  const visibleSections = siteContent.sections
    .filter(section => section.visible)
    .sort((a, b) => a.order - b.order);

  const renderSection = (section: any) => {
    switch (section.type) {
      case 'hero':
        return <HeroSection key={section.id} content={siteContent.hero} />;
      case 'about':
        return <AboutSection key={section.id} content={siteContent.about} />;
      case 'services':
        return <ServicesSection key={section.id} services={siteContent.services} />;
      case 'team':
        return <TeamSection key={section.id} teamMembers={siteContent.teamMembers} />;
      case 'cases':
        return <CaseStudiesSection key={section.id} caseStudies={siteContent.caseStudies} />;
      case 'testimonials':
        return <TestimonialsSection key={section.id} testimonials={siteContent.testimonials} />;
      case 'contact':
        return <ContactSection key={section.id} contactInfo={siteContent.contactInfo} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {visibleSections.map(renderSection)}
      </main>
      <Footer />
    </div>
  );
}