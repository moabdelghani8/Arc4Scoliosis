import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { CaseStudy } from '../../types';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section id="cases" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Real Patient Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See the incredible transformations and recoveries our patients have achieved through our comprehensive treatment programs.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Images */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    {caseStudy.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-center">
                      <span className="text-sm font-semibold text-red-800 dark:text-red-300">Before Treatment</span>
                    </div>
                    <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={caseStudy.beforeImage}
                        alt="Before treatment"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-center">
                      <span className="text-sm font-semibold text-green-800 dark:text-green-300">After Treatment</span>
                    </div>
                    <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={caseStudy.afterImage}
                        alt="After treatment"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caseStudy.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Initial Condition</h4>
                      <p className="text-gray-600 dark:text-gray-300">{caseStudy.condition}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Treatment Approach</h4>
                      <p className="text-gray-600 dark:text-gray-300">{caseStudy.treatment}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Final Outcome</h4>
                      <p className="text-gray-600 dark:text-gray-300">{caseStudy.outcome}</p>
                    </div>
                  </div>
                </div>

                <button className="group bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center">
                  Learn About This Treatment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}