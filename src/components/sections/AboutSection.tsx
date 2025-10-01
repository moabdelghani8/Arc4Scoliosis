import React from 'react';
import { CircleCheck as CheckCircle, Award, Users, Clock } from 'lucide-react';
import { AboutContent } from '../../types';
import './AboutSection.css';

interface AboutSectionProps {
  content: AboutContent;
}

// Stats data
const stats = [
  { icon: Users, value: '2,500+', label: 'Patients Treated' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: CheckCircle, value: '95%', label: 'Success Rate' },
  { icon: Clock, value: '24/7', label: 'Support Available' }
];

// Features data
const features = [
  'Evidence-based treatment approaches',
  'State-of-the-art equipment and facilities',
  'Personalized treatment plans',
  'Comprehensive rehabilitation programs',
  'Collaborative care approach',
  'Ongoing support and education'
];

// Sub-component for text content
function AboutTextContent({ content }: { content: AboutContent }) {
  return (
    <div className="about-text-container">
      <h2 className="about-title">
        {content.title}
      </h2>
      <p className="about-body-text">
        {content.bodyText}
      </p>
    </div>
  );
}

// Sub-component for feature item
function FeatureItem({ feature }: { feature: string }) {
  return (
    <div className="about-feature-item">
      <CheckCircle className="about-feature-icon" />
      <span className="about-feature-text">{feature}</span>
    </div>
  );
}

// Sub-component for features grid
function FeaturesGrid() {
  return (
    <div className="about-features-grid">
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} />
      ))}
    </div>
  );
}

// Sub-component for stat card
function StatCard({ stat }: { stat: typeof stats[0] }) {
  const IconComponent = stat.icon;
  
  return (
    <div className="about-stat-card">
      <div className="about-stat-inner">
        <IconComponent className="about-stat-icon" />
        <div className="about-stat-value">
          {stat.value}
        </div>
        <div className="about-stat-label">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

// Sub-component for stats grid
function StatsGrid() {
  return (
    <div className="about-stats-container">
      <div className="about-stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
}

// Sub-component for content section
function AboutContentSection({ content }: { content: AboutContent }) {
  return (
    <div className="about-content">
      <AboutTextContent content={content} />
      <FeaturesGrid />
      <StatsGrid />
    </div>
  );
}

// Sub-component for image section
function AboutImageSection({ image }: { image: string }) {
  return (
    <div className="about-image-container">
      <div className="about-image-wrapper">
        <img
          src={image}
          alt="Modern physical therapy facility"
          className="about-image"
        />
      </div>
      {/* Decorative elements */}
      <div className="about-decoration-top"></div>
      <div className="about-decoration-bottom"></div>
    </div>
  );
}

// Main component
export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <AboutContentSection content={content} />
          <AboutImageSection image={content.image} />
        </div>
      </div>
    </section>
  );
}