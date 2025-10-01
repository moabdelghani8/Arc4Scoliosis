import React, { useState } from 'react';
import { X, FileText, Users, Settings, MessageSquare, Phone, User } from 'lucide-react';
import { Section } from '../../types';

interface AddSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (sectionType: Section['type']) => void;
}

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
    description: 'Information about your clinic and services',
    icon: User
  },
  {
    type: 'services' as const,
    title: 'Services Section',
    description: 'List of services you provide',
    icon: Settings
  },
  {
    type: 'team' as const,
    title: 'Team Section',
    description: 'Meet your team members',
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

export function AddSectionModal({ isOpen, onClose, onAdd }: AddSectionModalProps) {
  const [selectedType, setSelectedType] = useState<Section['type'] | null>(null);

  if (!isOpen) return null;

  const handleAdd = () => {
    if (selectedType) {
      onAdd(selectedType);
      setSelectedType(null);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Add New Section
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {sectionTypes.map((section) => {
            const IconComponent = section.icon;
            return (
              <button
                key={section.type}
                onClick={() => setSelectedType(section.type)}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                  selectedType === section.type
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-400'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    selectedType === section.type
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {section.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            disabled={!selectedType}
            className="px-6 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
          >
            Add Section
          </button>
        </div>
      </div>
    </div>
  );
}