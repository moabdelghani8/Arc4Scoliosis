import { SiteContent } from '../types';

export const defaultSiteContent: SiteContent = {
  sections: [
    { id: '1', type: 'hero', title: 'Hero Section', visible: true, order: 1, content: {} },
    { id: '2', type: 'about', title: 'About Us', visible: true, order: 2, content: {} },
    { id: '3', type: 'services', title: 'Services', visible: true, order: 3, content: {} },
    { id: '4', type: 'team', title: 'Our Team', visible: true, order: 4, content: {} },
    { id: '5', type: 'cases', title: 'Patient Results', visible: true, order: 5, content: {} },
    { id: '6', type: 'testimonials', title: 'Testimonials', visible: true, order: 6, content: {} },
    { id: '7', type: 'contact', title: 'Contact Us', visible: true, order: 7, content: {} },
  ],
  hero: {
    headline: 'ARC FOR SCOLIOSIS PHYSIOTHERAPY AND BRACING',
    subheadline: 'where Science meets Art - ARC is the first leading Physical Therapy Clinic Specialized in Scoliosis Rehabilitation in Egypt & the middle East',
    ctaText: 'Start Your Recovery',
    backgroundImage: 'https://static.wixstatic.com/media/e124f0_1a9aa93574654d7593cbaf25ddd112d7~mv2.jpg'
  },
  about: {
    title: 'OUR SERVICES',
    bodyText: 'Scoliosis Specialized Physical Therapy Center - ARC is a Certified Schroth Best Practice Practitioner - Germany',
    image: 'https://static.wixstatic.com/media/e124f0_c0d10659d0944ea28decdd5aaa2a4816~mv2.jpg'
  },
  teamMembers: [
    {
      id: '1',
      name: 'Dr. Micle Johnson',
      title: 'Lead Physical Therapist',
      credentials: 'DPT, OCS, FAAOMPT',
      bio: 'With over 15 years of experience in orthopedic and sports physical therapy, Dr. Micle specializes in manual therapy and movement analysis.',
      image: 'https://www.future-doctor.de/wp-content/uploads/2024/08/shutterstock_2480850611.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Sports Rehabilitation Specialist',
      credentials: 'DPT, SCS, CSCS',
      bio: 'Michael focuses on returning athletes to peak performance through specialized rehabilitation programs and injury prevention strategies.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiO1ABhTbJ30hyaTS5yGuX0cFk_PN51aKV9g&s'
    },
    {
      id: '3',
      name: 'Dr. Jhib Rodriguez',
      title: 'Neurological Rehabilitation Specialist',
      credentials: 'DPT, NCS',
      bio: 'Dr. Rodriguez specializes in neurological conditions and helps patients recover from stroke, spinal cord injuries, and other neurological disorders.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMnqgs3U7KpmaQUo-qSbPEYV_rmz-_dtCoQ&s'
    }
  ],
  services: [
    {
      id: '1',
      title: 'Orthopedic Rehabilitation',
      description: 'Comprehensive treatment for bone, joint, and muscle injuries including post-surgical recovery.',
      icon: 'bone'
    },
    {
      id: '2',
      title: 'Sports Injury Recovery',
      description: 'Specialized programs to get athletes back to peak performance safely and efficiently.',
      icon: 'activity'
    },
    {
      id: '3',
      title: 'Manual Therapy',
      description: 'Hands-on techniques to improve mobility, reduce pain, and restore function.',
      icon: 'hand'
    },
    {
      id: '4',
      title: 'Movement Analysis',
      description: 'Advanced assessment of movement patterns to identify and correct dysfunctions.',
      icon: 'eye'
    },
    {
      id: '5',
      title: 'Pain Management',
      description: 'Evidence-based approaches to manage chronic pain and improve quality of life.',
      icon: 'shield'
    },
    {
      id: '6',
      title: 'Wellness & Prevention',
      description: 'Programs designed to prevent injuries and maintain optimal physical health.',
      icon: 'heart'
    }
  ],
  caseStudies: [
    {
      id: '1',
      title: 'ACL Reconstruction Recovery',
      beforeImage: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      afterImage: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      condition: 'Complete ACL tear from soccer injury',
      treatment: '6-month progressive rehabilitation program focusing on strength, stability, and sport-specific movements',
      outcome: 'Full return to competitive soccer with improved performance metrics',
      description: 'Professional soccer player returned to elite competition after comprehensive ACL rehabilitation program.'
    },
    {
      id: '2',
      title: 'Chronic Lower Back Pain Resolution',
      beforeImage: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      afterImage: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      condition: '5-year history of chronic lower back pain affecting daily activities',
      treatment: 'Comprehensive approach including manual therapy, movement re-education, and strengthening',
      outcome: '90% reduction in pain levels and return to all desired activities',
      description: 'Office worker overcame debilitating back pain through targeted therapeutic intervention.'
    }
  ],
  testimonials: [
    {
      id: '1',
      quote: 'The team here completely transformed my recovery experience. Professional, caring, and incredibly effective treatment.',
      patientName: 'Jennifer K.',
      condition: 'Shoulder Surgery Recovery'
    },
    {
      id: '2',
      quote: 'After years of chronic pain, I finally found relief. The personalized approach made all the difference.',
      patientName: 'Robert M.',
      condition: 'Chronic Back Pain'
    },
    {
      id: '3',
      quote: 'Got me back on the field stronger than ever. Their sports rehab program is outstanding.',
      patientName: 'Alex T.',
      condition: 'Sports Injury'
    }
  ],
  contactInfo: {
    address: '123 Wellness Drive, Health City, HC 12345',
    phone: '(555) 123-4567',
    email: 'info@ptclinic.com',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4324!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
  }
};
