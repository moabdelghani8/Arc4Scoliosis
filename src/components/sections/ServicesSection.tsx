import React from 'react';
import { 
  Activity, 
  Heart, 
  Shield, 
  Eye, 
  Hand,
  Bone
} from 'lucide-react';
import { Service } from '../../types';
import './ServicesSection.css';

interface ServicesSectionProps {
  services: Service[];
}

const iconMap = {
  activity: Activity,
  heart: Heart,
  shield: Shield,
  eye: Eye,
  hand: Hand,
  bone: Bone
};

// Sub-component for section header
function SectionHeader() {
  return (
    <div className="services-header">
      <h2 className="services-header-title">
        Our Specialized Services
      </h2>
      <p className="services-header-subtitle">
        Comprehensive physical therapy services tailored to help you recover, strengthen, and achieve your wellness goals.
      </p>
    </div>
  );
}

// Sub-component for service icon
function ServiceIcon({ icon }: { icon: string }) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Activity;
  
  return (
    <div className="service-icon-container">
      <IconComponent className="service-icon" />
    </div>
  );
}

// Sub-component for learn more button
function LearnMoreButton() {
  return (
    <div className="service-learn-more-container">
      <button className="service-learn-more">
        Learn More
        <span className="service-learn-more-arrow">→</span>
      </button>
    </div>
  );
}

// Sub-component for individual service card
function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="service-card">
      <ServiceIcon icon={service.icon} />
      
      <h3 className="service-title">
        {service.title}
      </h3>
      
      <p className="service-description">
        {service.description}
      </p>
      
      <LearnMoreButton />
    </div>
  );
}

// Main component
export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <SectionHeader />

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}