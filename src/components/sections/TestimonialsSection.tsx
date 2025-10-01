import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../types';
import './TestimonialsSection.css';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

// Sub-component for section header
function SectionHeader() {
  return (
    <div className="testimonials-header">
      <h2 className="testimonials-header-title">
        What Our Patients Say
      </h2>
      <p className="testimonials-header-subtitle">
        Don't just take our word for it. Here's what our patients have to say about their recovery journey with us.
      </p>
    </div>
  );
}

// Sub-component for quote icon
function QuoteIcon() {
  return (
    <div className="testimonial-quote-icon-container">
      <div className="testimonial-quote-icon-circle">
        <Quote className="testimonial-quote-icon" />
      </div>
    </div>
  );
}

// Sub-component for star rating
function StarRating() {
  return (
    <div className="testimonial-stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="testimonial-star" />
      ))}
    </div>
  );
}

// Sub-component for author information
function AuthorInfo({ patientName, condition }: { patientName: string; condition?: string }) {
  return (
    <div className="testimonial-author">
      <div className="testimonial-author-name">
        {patientName}
      </div>
      {condition && (
        <div className="testimonial-author-condition">
          {condition}
        </div>
      )}
    </div>
  );
}

// Sub-component for individual testimonial card
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="testimonial-card">
      {/* Quote Icon */}
      <QuoteIcon />

      {/* Stars */}
      <StarRating />

      {/* Quote */}
      <blockquote className="testimonial-quote-text">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <AuthorInfo 
        patientName={testimonial.patientName} 
        condition={testimonial.condition} 
      />
    </div>
  );
}

// Main component
export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <SectionHeader />

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}