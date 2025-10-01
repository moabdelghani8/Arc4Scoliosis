import { SiteContent } from '../types';

export const defaultSiteContent: SiteContent = {
  sections: [
    { id: '1', type: 'hero', title: 'Hero Section', visible: true, order: 1, content: {} },
    { id: '2', type: 'about', title: 'About Us', visible: true, order: 2, content: {} },
    { id: '3', type: 'services', title: 'Services', visible: true, order: 3, content: {} },
    { id: '4', type: 'team', title: 'Our Team', visible: true, order: 4, content: {} },
    { id: '5', type: 'cases', title: 'Patient Results', visible: true, order: 5, content: {} },
    { id: '6', type: 'testimonials', title: 'Testimonials', visible: true, order: 6, content: {} },
    { id: '7', type: 'pricing', title: 'Pricing Plans', visible: true, order: 7, content: {} },
    { id: '8', type: 'contact', title: 'Contact Us', visible: true, order: 8, content: {} },
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
      title: 'Scoliosis Assessment',
      description: 'Comprehensive evaluation of spinal curvature and postural analysis using advanced diagnostic techniques.',
      icon: 'bone'
    },
    {
      id: '2',
      title: 'Schroth Method Therapy',
      description: 'Certified Schroth Best Practice therapy for scoliosis correction and spinal alignment improvement.',
      icon: 'activity'
    },
    {
      id: '3',
      title: 'Scoliosis Bracing',
      description: 'Custom-fitted braces designed to halt progression and correct spinal curvature in growing patients.',
      icon: 'hand'
    },
    {
      id: '4',
      title: 'Postural Training',
      description: 'Specialized exercises and training programs to improve posture and spinal alignment.',
      icon: 'eye'
    },
    {
      id: '5',
      title: 'Pain Management',
      description: 'Evidence-based approaches to manage scoliosis-related pain and improve quality of life.',
      icon: 'shield'
    },
    {
      id: '6',
      title: 'Preventive Care',
      description: 'Early intervention programs to prevent scoliosis progression and maintain spinal health.',
      icon: 'heart'
    }
  ],
  caseStudies: [
    {
      id: '1',
      title: 'Adolescent Scoliosis Correction',
      beforeImage: 'https://static.wixstatic.com/media/e124f0_c0d10659d0944ea28decdd5aaa2a4816~mv2.jpg',
      afterImage: 'https://static.wixstatic.com/media/e124f0_c0d10659d0944ea28decdd5aaa2a4816~mv2.jpg',
      condition: '15-year-old with 25-degree thoracic scoliosis',
      treatment: '12-month Schroth therapy program combined with custom bracing',
      outcome: 'Reduction to 15-degree curvature with improved posture and pain relief',
      description: 'Young patient achieved significant curvature reduction through specialized scoliosis treatment program.'
    },
    {
      id: '2',
      title: 'Adult Scoliosis Management',
      beforeImage: 'https://static.wixstatic.com/media/e124f0_c0d10659d0944ea28decdd5aaa2a4816~mv2.jpg',
      afterImage: 'https://static.wixstatic.com/media/e124f0_c0d10659d0944ea28decdd5aaa2a4816~mv2.jpg',
      condition: '35-year-old with progressive adult-onset scoliosis and chronic back pain',
      treatment: 'Comprehensive Schroth therapy and postural training program',
      outcome: 'Stabilized curvature progression and 80% reduction in pain levels',
      description: 'Adult patient successfully managed scoliosis progression and achieved significant pain relief.'
    }
  ],
  testimonials: [
    {
      id: '1',
      quote: 'ARC changed my life. The Schroth method helped me understand my scoliosis and gave me tools to manage it effectively.',
      patientName: 'Sarah M.',
      condition: 'Adolescent Scoliosis'
    },
    {
      id: '2',
      quote: 'After years of pain, I finally found relief at ARC. Their specialized approach to scoliosis treatment is remarkable.',
      patientName: 'Ahmed K.',
      condition: 'Adult Scoliosis'
    },
    {
      id: '3',
      quote: 'The team at ARC is incredibly knowledgeable and caring. They helped my daughter gain confidence and improve her posture.',
      patientName: 'Fatima A.',
      condition: 'Pediatric Scoliosis'
    }
  ],
  contactInfo: {
    address: 'Cairo, Egypt',
    phone: '+20 123 456 7890',
    email: 'info@arcscoliosis.com',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.603895432!2d31.2357116!3d30.0444196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fc60c1b6c81%3A0x2e5b8b8b8b8b8b8b!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg'
  },
  pricing: {
    title: 'Choose Your Treatment Plan',
    subtitle: 'Select the plan that best fits your needs and start your journey to better spinal health',
    plans: [
      {
        id: '1',
        title: '12 Sessions Package',
        price: '90',
        description: '2-3 Sessions/ week + Consultation and Formetric 4D Scanning',
        validity: 'Valid for 2 months',
        benefits: [
          '2-3 Sessions per week',
          'Initial consultation included',
          'Formetric 4D Scanning',
          'Personalized treatment plan',
          'Progress monitoring'
        ],
        footerText: 'Scoliosis Rehabilitation'
      },
      {
        id: '2',
        title: 'Gensingen Brace®',
        price: '1,400',
        description: 'a customized brace for scoliosis',
        validity: 'Valid for one month',
        benefits: [
          'Custom-fitted brace',
          'Professional fitting session',
          'Free 3 Schroth Therapy Sessions',
          'Follow-up adjustments',
          '24/7 support'
        ],
        footerText: 'Gensingen Brace®+ Free 3 Schroth Therapy Sessions'
      },
      {
        id: '3',
        title: 'Online Sessions',
        price: '60',
        description: 'Every month\n12 Online Sessions',
        validity: 'Every month',
        benefits: [
          '12 Online Sessions per month',
          'Flexible scheduling',
          'Home exercise guidance',
          'Video consultations',
          'Progress tracking'
        ],
        footerText: undefined
      }
    ]
  }
};
