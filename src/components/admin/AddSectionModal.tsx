import React, { useState } from 'react';
import { X, Plus, FileText, Users, Settings, MessageSquare, Phone } from 'lucide-react';
import { Section } from '../../types';

interface AddSectionModalProps {
  onAdd: (sectionType: Section['type']) => void;
  onClose: () => void;
}

export function AddSectionModal({ onAdd, onClose }: AddSectionModalProps) {
  const [selectedType, setSelectedType] = useState<Section['type'] | null>(null);

  const sectionTypes = [
    {
      type: 'hero' as const,
      title: 'Hero Section',
      description: 'Main banner with headline and call-to-action',
      icon: FileText
    },
    {
      type: 'about' as const,
      title: 'About Section',
      description: 'Information about the clinic and approach',
      icon: FileText
    },
    {
      type: 'services' as const,
      title: 'Services Section',
      description: 'List of services offered by the clinic',
      icon: Settings
    },
    {
      type: 'team' as const,
      title: 'Team Section',
      description: 'Team members and their credentials',
      icon: Users
    },
    {
      type: 'cases' as const,
      title: 'Case Studies Section',
      description: 'Patient success stories and results',
      icon: FileText
    },
    {
      type: 'testimonials' as const,
      title: 'Testimonials Section',
      description: 'Patient reviews and feedback',
      icon: MessageSquare
    },
    {
      type: 'contact' as const,
      title: 'Contact Section',
      description: 'Contact information and form',
      icon: Phone
    }
  ];

  const handleAdd = () => {
    if (selectedType) {
      onAdd(selectedType);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Add New Section
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Choose the type of section you want to add to your homepage:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {sectionTypes.map((sectionType) => (
              <button
                key={sectionType.type}
                onClick={() => setSelectedType(sectionType.type)}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                  selectedType === sectionType.type
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    selectedType === sectionType.type
                      ? 'bg-blue-100 dark:bg-blue-900/30'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}>
                    <sectionType.icon className={`h-5 w-5 ${
                      selectedType === sectionType.type
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-500'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${
                      selectedType === sectionType.type
                        ? 'text-blue-900 dark:text-blue-100'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {sectionType.title}
                    </h3>
                    <p className={`text-sm ${
                      selectedType === sectionType.type
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {sectionType.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              disabled={!selectedType}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Section</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}