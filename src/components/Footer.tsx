import React from 'react';
import { Activity, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Team', href: '#team' },
    { label: 'Patient Results', href: '#cases' },
    { label: 'Pricing Plans', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Scoliosis Assessment',
    'Schroth Method Therapy', 
    'Scoliosis Bracing',
    'Postural Training',
    'Pain Management',
    'Online Consultations'
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Arc4Scoliosis</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Leading scoliosis specialized physical therapy clinic in Egypt & the Middle East. We provide expert Schroth Method therapy, custom bracing, and comprehensive rehabilitation programs to help patients achieve better spinal health.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-gray-800 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Wellness Drive<br />
                  Health City, HC 12345
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">info@ptclinic.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Mon-Fri: 7:00 AM - 7:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Arc4Scoliosis Physical Therapy. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}