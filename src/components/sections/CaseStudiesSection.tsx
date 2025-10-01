import React from 'react';
import { ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import { CaseStudy } from '../../types';
import './CaseStudiesSection.css';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

// Sub-component for section header
function SectionHeader() {
  return (
    <div className="case-studies-header">
      <h2 className="case-studies-header-title">
        Real Patient Success Stories
      </h2>
      <p className="case-studies-header-subtitle">
        See the incredible transformations and recoveries our patients have achieved through our comprehensive treatment programs.
      </p>
    </div>
  );
}

// Sub-component for before/after images
function BeforeAfterImages({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="case-study-images">
      <div className="case-study-title">
        <h3>{caseStudy.title}</h3>
      </div>
      
      <div className="case-study-images-grid">
        <div className="case-study-image-wrapper">
          <div className="case-study-label-before">
            <span>Before Treatment</span>
          </div>
          <div className="case-study-image-container">
            <img
              src={caseStudy.beforeImage}
              alt="Before treatment"
              className="case-study-image"
            />
          </div>
        </div>
        
        <div className="case-study-image-wrapper">
          <div className="case-study-label-after">
            <span>After Treatment</span>
          </div>
          <div className="case-study-image-container">
            <img
              src={caseStudy.afterImage}
              alt="After treatment"
              className="case-study-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for detail item
function DetailItem({ 
  icon: Icon, 
  title, 
  description,
  iconClass 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  iconClass: string;
}) {
  return (
    <div className="case-study-detail-item">
      <div className={iconClass}>
        <Icon />
      </div>
      <div className="case-study-detail-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Sub-component for case study content
function CaseStudyContent({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="case-study-content">
      <p className="case-study-description">
        {caseStudy.description}
      </p>

      <div className="case-study-details">
        <DetailItem
          icon={CheckCircle}
          title="Initial Condition"
          description={caseStudy.condition}
          iconClass="case-study-detail-icon-blue"
        />

        <DetailItem
          icon={CheckCircle}
          title="Treatment Approach"
          description={caseStudy.treatment}
          iconClass="case-study-detail-icon-blue"
        />

        <DetailItem
          icon={CheckCircle}
          title="Final Outcome"
          description={caseStudy.outcome}
          iconClass="case-study-detail-icon-green"
        />
      </div>

      {/* <button className="case-study-cta">
        Learn About This Treatment
        <ArrowRight className="case-study-cta-icon" />
      </button> */}
    </div>
  );
}

// Sub-component for individual case study
function CaseStudyItem({ caseStudy, isReverse }: { caseStudy: CaseStudy; isReverse: boolean }) {
  return (
    <div className={`case-study-item ${isReverse ? 'reverse' : ''}`}>
      <BeforeAfterImages caseStudy={caseStudy} />
      <CaseStudyContent caseStudy={caseStudy} />
    </div>
  );
}

// Main component
export function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section id="cases" className="case-studies-section">
      <div className="case-studies-container">
        <SectionHeader />

        <div className="case-studies-list">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyItem 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              isReverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}