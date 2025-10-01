import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { AboutContent } from '../../types';

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  const stats = [
    { icon: Users, value: '2,500+', label: 'Patients Treated' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: CheckCircle, value: '95%', label: 'Success Rate' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ];

  const features = [
    'Evidence-based treatment approaches',
    'State-of-the-art equipment and facilities',
    'Personalized treatment plans',
    'Comprehensive rehabilitation programs',
    'Collaborative care approach',
    'Ongoing support and education'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {content.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {content.bodyText}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                  <stat.icon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={content.image}
                alt="Modern physical therapy facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}