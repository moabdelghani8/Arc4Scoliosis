export interface TeamMember {
  id: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  condition: string;
  treatment: string;
  outcome: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  patientName: string;
  condition?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  backgroundImage: string;
}

export interface AboutContent {
  title: string;
  bodyText: string;
  image: string;
}

export interface Section {
  id: string;
  type: 'hero' | 'about' | 'team' | 'services' | 'cases' | 'testimonials' | 'contact';
  title: string;
  visible: boolean;
  order: number;
  content: any;
}

export interface SiteContent {
  sections: Section[];
  teamMembers: TeamMember[];
  services: Service[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  contactInfo: ContactInfo;
  hero: HeroContent;
  about: AboutContent;
}