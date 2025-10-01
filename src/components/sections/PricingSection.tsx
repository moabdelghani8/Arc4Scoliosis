import { CheckCircle } from 'lucide-react';
import { PricingContent } from '../../types';
import './PricingSection.css';

interface PricingSectionProps {
  content: PricingContent;
}

// Sub-component for section header
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="pricing-header">
      <h2 className="pricing-header-title">
        {title}
      </h2>
      {subtitle && (
        <p className="pricing-header-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Sub-component for price display
function PlanPrice({ price }: { price: string | number }) {
  return (
    <div className="pricing-price-wrapper">
      <span className="pricing-price-currency">$</span>
      <span className="pricing-price-amount">
        {price}
      </span>
    </div>
  );
}

// Sub-component for benefits list
function BenefitsList({ benefits }: { benefits?: string[] }) {
  if (!benefits || benefits.length === 0) {
    return (
      <div className="pricing-benefits">
        <div className="pricing-benefits-empty">
          <p className="pricing-benefits-empty-text">
            No benefits listed
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pricing-benefits">
      <ul className="pricing-benefits-list">
        {benefits.map((benefit, index) => (
          <li key={index}>
            <CheckCircle className="pricing-benefit-icon" />
            <span className="pricing-benefit-text">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Sub-component for card footer
function CardFooter({ footerText }: { footerText?: string }) {
  return (
    <div className="pricing-card-footer">
      {footerText ? (
        <p className="pricing-card-footer-text">
          {footerText}
        </p>
      ) : (
        <div></div>
      )}
    </div>
  );
}

// Sub-component for individual pricing cards
function PricingCard({ plan }: { plan: PricingContent['plans'][0] }) {
  return (
    <div className="pricing-card">
      {/* Plan Header */}
      <div className="pricing-card-header">
        <h3 className="pricing-card-title">
          {plan.title}
        </h3>
        <PlanPrice price={plan.price} />
        <p className="pricing-card-description">
          {plan.description}
        </p>
      </div>

      {/* Validity */}
      <div className="pricing-validity">
        <p className="pricing-validity-text">
          {plan.validity}
        </p>
      </div>

      {/* Benefits */}
      <BenefitsList benefits={plan.benefits} />

      {/* Select Button */}
      <div className="pricing-button-wrapper">
        <button className="pricing-button">
          Select
        </button>
      </div>

      {/* Footer Section */}
      <CardFooter footerText={plan.footerText} />
    </div>
  );
}

// Sub-component for additional info section
function AdditionalInfo() {
  return (
    <div className="pricing-additional-info">
      <p className="pricing-additional-info-text">
        All plans include personalized consultation and comprehensive assessment. 
        Contact us to discuss which plan is right for you.
      </p>
    </div>
  );
}

// Main component
export function PricingSection({ content }: PricingSectionProps) {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <SectionHeader title={content.title} subtitle={content.subtitle} />
        
        <div className="pricing-grid">
          {content.plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <AdditionalInfo />
      </div>
    </section>
  );
}