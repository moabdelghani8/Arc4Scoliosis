import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { HeroContent } from '../../types';
import './HeroSection.css';

interface HeroSectionProps {
  content: HeroContent;
}

// Sub-component for background
function HeroBackground({ backgroundImage }: { backgroundImage: string }) {
  return (
    <div className="hero-background">
      <img
        src={backgroundImage}
        alt="Scoliosis therapy session"
        className="hero-background-image"
      />
      <div className="hero-background-overlay"></div>
    </div>
  );
}

// Sub-component for CTA buttons
function HeroCTAButtons({ ctaText }: { ctaText: string }) {
  return (
    <div className="hero-cta-container">
      <button className="hero-cta-primary">
        {ctaText}
        <ArrowRight className="hero-cta-primary-icon" />
      </button>
      
      <button className="hero-cta-secondary">
        <Play className="hero-cta-secondary-icon" />
        Watch Our Story
      </button>
    </div>
  );
}

// Sub-component for scroll indicator
function ScrollIndicator() {
  return (
    <div className="hero-scroll-indicator">
      <div className="hero-scroll-indicator-border">
        <div className="hero-scroll-indicator-dot"></div>
      </div>
    </div>
  );
}

// Main component
export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="hero" className="hero-section">
      {/* Background Image */}
      <HeroBackground backgroundImage={content.backgroundImage} />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-content-wrapper">
          <h1 className="hero-headline">
            {content.headline}
          </h1>
          <p className="hero-subheadline">
            {content.subheadline}
          </p>
          
          <HeroCTAButtons ctaText={content.ctaText} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}