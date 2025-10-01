import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { ContactInfo } from '../../types';
import './ContactSection.css';

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

// Sub-component for section header
function SectionHeader() {
  return (
    <div className="contact-header">
      <h2 className="contact-header-title">
        Get In Touch
      </h2>
      <p className="contact-header-subtitle">
        Ready to start your recovery journey? Contact us today to schedule your consultation and take the first step toward better health.
      </p>
    </div>
  );
}

// Sub-component for contact info item
function ContactInfoItem({ 
  icon: Icon, 
  title, 
  children 
}: { 
  icon: React.ElementType; 
  title: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="contact-info-item">
      <div className="contact-info-icon-container">
        <Icon className="contact-info-icon" />
      </div>
      <div className="contact-info-content">
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
}

// Sub-component for contact information section
function ContactInfoSection({ contactInfo }: { contactInfo: ContactInfo }) {
  return (
    <div className="contact-info-section">
      <div>
        <h3 className="contact-info-title">
          Contact Information
        </h3>
      </div>

      <div className="contact-info-list">
        <ContactInfoItem icon={MapPin} title="Address">
          <p>{contactInfo.address}</p>
        </ContactInfoItem>

        <ContactInfoItem icon={Phone} title="Phone">
          <p>{contactInfo.phone}</p>
        </ContactInfoItem>

        <ContactInfoItem icon={Mail} title="Email">
          <p>{contactInfo.email}</p>
        </ContactInfoItem>

        <ContactInfoItem icon={Clock} title="Hours">
          <div className="contact-info-hours">
            <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
            <p>Saturday: 8:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </ContactInfoItem>
      </div>

      {/* Map */}
      <div className="contact-map-container">
        <iframe
          src={contactInfo.mapEmbedUrl}
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contact-map"
        ></iframe>
      </div>
    </div>
  );
}

// Sub-component for contact form
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-form-container">
      <h3 className="contact-form-title">
        Send Us a Message
      </h3>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-group">
          <label htmlFor="name" className="contact-form-label">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-form-input"
            placeholder="Enter your full name"
          />
        </div>

        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="email" className="contact-form-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-form-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="phone" className="contact-form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="contact-form-input"
              placeholder="Enter your phone"
            />
          </div>
        </div>

        <div className="contact-form-group">
          <label htmlFor="message" className="contact-form-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="contact-form-textarea"
            placeholder="Tell us about your condition and how we can help..."
          ></textarea>
        </div>

        <button type="submit" className="contact-form-submit">
          Send Message
          <Send className="contact-form-submit-icon" />
        </button>
      </form>
    </div>
  );
}

// Main component
export function ContactSection({ contactInfo }: ContactSectionProps) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <SectionHeader />

        <div className="contact-grid">
          <ContactInfoSection contactInfo={contactInfo} />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}