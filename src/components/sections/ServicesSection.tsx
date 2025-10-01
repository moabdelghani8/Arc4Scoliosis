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

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive physical therapy services tailored to help you recover, strengthen, and achieve your wellness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Activity;
            
            return (
              <div
                key={service.id}
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6">
                  <button className="text-orange-600 dark:text-orange-400 font-semibold hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-200 group">
                    Learn More
                    <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}