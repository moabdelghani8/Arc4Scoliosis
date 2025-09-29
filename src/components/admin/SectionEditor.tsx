import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { Section, SiteContent } from '../../types';

interface SectionEditorProps {
  section: Section | null;
  siteContent: SiteContent;
  onSave: (section: Section) => void;
  onClose: () => void;
}

export function SectionEditor({ section, siteContent, onSave, onClose }: SectionEditorProps) {
  const [formData, setFormData] = useState(() => {
    if (!section) return {};
    
    switch (section.type) {
      case 'hero':
        return siteContent.hero;
      case 'about':
        return siteContent.about;
      default:
        return {};
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (section) {
      onSave({
        ...section,
        content: formData
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!section) return null;

  const renderHeroEditor = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Main Headline
        </label>
        <input
          type="text"
          value={(formData as any).headline || ''}
          onChange={(e) => handleChange('headline', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter main headline"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Subheadline
        </label>
        <textarea
          value={(formData as any).subheadline || ''}
          onChange={(e) => handleChange('subheadline', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
          placeholder="Enter subheadline"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          CTA Button Text
        </label>
        <input
          type="text"
          value={(formData as any).ctaText || ''}
          onChange={(e) => handleChange('ctaText', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter CTA button text"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Background Image URL
        </label>
        <input
          type="url"
          value={(formData as any).backgroundImage || ''}
          onChange={(e) => handleChange('backgroundImage', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter background image URL"
        />
      </div>
    </div>
  );

  const renderAboutEditor = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Section Title
        </label>
        <input
          type="text"
          value={(formData as any).title || ''}
          onChange={(e) => handleChange('title', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter section title"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Body Text
        </label>
        <textarea
          value={(formData as any).bodyText || ''}
          onChange={(e) => handleChange('bodyText', e.target.value)}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
          placeholder="Enter body text"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Image URL
        </label>
        <input
          type="url"
          value={(formData as any).image || ''}
          onChange={(e) => handleChange('image', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter image URL"
        />
      </div>
    </div>
  );

  const renderEditor = () => {
    switch (section.type) {
      case 'hero':
        return renderHeroEditor();
      case 'about':
        return renderAboutEditor();
      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">
              Editor for {section.type} section will be implemented here.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Edit {section.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {renderEditor()}

          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}