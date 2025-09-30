import React, { useState, useEffect } from 'react';
import { X, Save, Plus, Trash2 } from 'lucide-react';
import { Section, SiteContent } from '../../types';

interface EditSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: Section | null;
  siteContent: SiteContent;
  onSave: (updatedContent: Partial<SiteContent>) => void;
}

export function EditSectionModal({ isOpen, onClose, section, siteContent, onSave }: EditSectionModalProps) {
  const [formData, setFormData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (section && siteContent) {
      switch (section.type) {
        case 'hero':
          setFormData(siteContent.hero);
          break;
        case 'about':
          setFormData(siteContent.about);
          break;
        case 'team':
          setFormData({ teamMembers: siteContent.teamMembers });
          break;
        case 'services':
          setFormData({ services: siteContent.services });
          break;
        case 'cases':
          setFormData({ caseStudies: siteContent.caseStudies });
          break;
        case 'testimonials':
          setFormData({ testimonials: siteContent.testimonials });
          break;
        case 'contact':
          setFormData(siteContent.contactInfo);
          break;
        default:
          setFormData({});
      }
    }
  }, [section, siteContent]);

  if (!isOpen || !section) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const updatedContent: Partial<SiteContent> = {};
    
    switch (section.type) {
      case 'hero':
        updatedContent.hero = formData;
        break;
      case 'about':
        updatedContent.about = formData;
        break;
      case 'team':
        updatedContent.teamMembers = formData.teamMembers;
        break;
      case 'services':
        updatedContent.services = formData.services;
        break;
      case 'cases':
        updatedContent.caseStudies = formData.caseStudies;
        break;
      case 'testimonials':
        updatedContent.testimonials = formData.testimonials;
        break;
      case 'contact':
        updatedContent.contactInfo = formData;
        break;
    }
    
    onSave(updatedContent);
    setIsLoading(false);
    onClose();
  };

  const renderHeroEditor = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Headline
        </label>
        <input
          type="text"
          value={formData.headline || ''}
          onChange={(e) => handleInputChange('headline', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter main headline"
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Subheadline
        </label>
        <textarea
          value={formData.subheadline || ''}
          onChange={(e) => handleInputChange('subheadline', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
          placeholder="Enter subheadline text"
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Call-to-Action Text
        </label>
        <input
          type="text"
          value={formData.ctaText || ''}
          onChange={(e) => handleInputChange('ctaText', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter button text"
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Background Image URL
        </label>
        <input
          type="url"
          value={formData.backgroundImage || ''}
          onChange={(e) => handleInputChange('backgroundImage', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter image URL"
        />
      </div>
    </div>
  );

  const renderAboutEditor = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Section Title
        </label>
        <input
          type="text"
          value={formData.title || ''}
          onChange={(e) => handleInputChange('title', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter section title"
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Body Text
        </label>
        <textarea
          value={formData.bodyText || ''}
          onChange={(e) => handleInputChange('bodyText', e.target.value)}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
          placeholder="Enter main content text"
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Image URL
        </label>
        <input
          type="url"
          value={formData.image || ''}
          onChange={(e) => handleInputChange('image', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter image URL"
        />
      </div>
    </div>
  );

  const renderTeamEditor = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team Members</h3>
        <button
          onClick={() => {
            const newMember = {
              id: Date.now().toString(),
              name: '',
              title: '',
              credentials: '',
              bio: '',
              image: ''
            };
            setFormData(prev => ({
              ...prev,
              teamMembers: [...(prev.teamMembers || []), newMember]
            }));
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Member
        </button>
      </div>
      
      {(formData.teamMembers || []).map((member, index) => (
        <div key={member.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-900 dark:text-white">Team Member {index + 1}</h4>
            <button
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  teamMembers: prev.teamMembers.filter((_, i) => i !== index)
                }));
              }}
              className="text-red-600 hover:text-red-700 p-1"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                value={member.name}
                onChange={(e) => {
                  const newMembers = [...formData.teamMembers];
                  newMembers[index] = { ...member, name: e.target.value };
                  setFormData(prev => ({ ...prev, teamMembers: newMembers }));
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
              <input
                type="text"
                value={member.title}
                onChange={(e) => {
                  const newMembers = [...formData.teamMembers];
                  newMembers[index] = { ...member, title: e.target.value };
                  setFormData(prev => ({ ...prev, teamMembers: newMembers }));
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Credentials</label>
              <input
                type="text"
                value={member.credentials}
                onChange={(e) => {
                  const newMembers = [...formData.teamMembers];
                  newMembers[index] = { ...member, credentials: e.target.value };
                  setFormData(prev => ({ ...prev, teamMembers: newMembers }));
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL</label>
              <input
                type="url"
                value={member.image}
                onChange={(e) => {
                  const newMembers = [...formData.teamMembers];
                  newMembers[index] = { ...member, image: e.target.value };
                  setFormData(prev => ({ ...prev, teamMembers: newMembers }));
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
            <textarea
              value={member.bio}
              onChange={(e) => {
                const newMembers = [...formData.teamMembers];
                newMembers[index] = { ...member, bio: e.target.value };
                setFormData(prev => ({ ...prev, teamMembers: newMembers }));
              }}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderServicesEditor = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Services</h3>
        <button
          onClick={() => {
            const newService = {
              id: Date.now().toString(),
              title: '',
              description: '',
              icon: 'activity'
            };
            setFormData(prev => ({
              ...prev,
              services: [...(prev.services || []), newService]
            }));
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Service
        </button>
      </div>
      
      {(formData.services || []).map((service, index) => (
        <div key={service.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-900 dark:text-white">Service {index + 1}</h4>
            <button
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  services: prev.services.filter((_, i) => i !== index)
                }));
              }}
              className="text-red-600 hover:text-red-700 p-1"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
              <input
                type="text"
                value={service.title}
                onChange={(e) => {
                  const newServices = [...formData.services];
                  newServices[index] = { ...service, title: e.target.value };
                  setFormData(prev => ({ ...prev, services: newServices }));
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Icon</label>
              <select
                value={service.icon}
                onChange={(e) => {
                  const newServices = [...formData.services];
                  newServices[index] = { ...service, icon: e.target.value };
                  setFormData(prev => ({ ...prev, services: newServices }));
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="activity">Activity</option>
                <option value="heart">Heart</option>
                <option value="shield">Shield</option>
                <option value="eye">Eye</option>
                <option value="hand">Hand</option>
                <option value="bone">Bone</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
            <textarea
              value={service.description}
              onChange={(e) => {
                const newServices = [...formData.services];
                newServices[index] = { ...service, description: e.target.value };
                setFormData(prev => ({ ...prev, services: newServices }));
              }}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderCasesEditor = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Case Studies</h3>
        <button
          onClick={() => {
            const newCase = {
              id: Date.now().toString(),
              title: '',
              beforeImage: '',
              afterImage: '',
              description: '',
              condition: '',
              treatment: '',
              outcome: ''
            };
            setFormData(prev => ({
              ...prev,
              caseStudies: [...(prev.caseStudies || []), newCase]
            }));
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Case Study
        </button>
      </div>
      
      {(formData.caseStudies || []).map((caseStudy, index) => (
        <div key={caseStudy.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-900 dark:text-white">Case Study {index + 1}</h4>
            <button
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  caseStudies: prev.caseStudies.filter((_, i) => i !== index)
                }));
              }}
              className="text-red-600 hover:text-red-700 p-1"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
            <input
              type="text"
              value={caseStudy.title}
              onChange={(e) => {
                const newCases = [...formData.caseStudies];
                newCases[index] = { ...caseStudy, title: e.target.value };
                setFormData(prev => ({ ...prev, caseStudies: newCases }));
              }}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Before Image URL</label>
              <input
                type="url"
                value={caseStudy.beforeImage}
                onChange={(e) => {
                  const newCases = [...formData.caseStudies];
                  newCases[index] = { ...caseStudy, beforeImage: e.target.value };
                  setFormData(prev => ({ ...prev, caseStudies: newCases }));
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">After Image URL</label>
              <input
                type="url"
                value={caseStudy.afterImage}
                onChange={(e) => {
                  const newCases = [...formData.caseStudies];
                  newCases[index] = { ...caseStudy, afterImage: e.target.value };
                  setFormData(prev => ({ ...prev, caseStudies: newCases }));
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
            <textarea
              value={caseStudy.description}
              onChange={(e) => {
                const newCases = [...formData.caseStudies];
                newCases[index] = { ...caseStudy, description: e.target.value };
                setFormData(prev => ({ ...prev, caseStudies: newCases }));
              }}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Condition</label>
            <input
              type="text"
              value={caseStudy.condition}
              onChange={(e) => {
                const newCases = [...formData.caseStudies];
                newCases[index] = { ...caseStudy, condition: e.target.value };
                setFormData(prev => ({ ...prev, caseStudies: newCases }));
              }}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Treatment</label>
            <textarea
              value={caseStudy.treatment}
              onChange={(e) => {
                const newCases = [...formData.caseStudies];
                newCases[index] = { ...caseStudy, treatment: e.target.value };
                setFormData(prev => ({ ...prev, caseStudies: newCases }));
              }}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Outcome</label>
            <textarea
              value={caseStudy.outcome}
              onChange={(e) => {
                const newCases = [...formData.caseStudies];
                newCases[index] = { ...caseStudy, outcome: e.target.value };
                setFormData(prev => ({ ...prev, caseStudies: newCases }));
              }}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderTestimonialsEditor = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Testimonials</h3>
        <button
          onClick={() => {
            const newTestimonial = {
              id: Date.now().toString(),
              quote: '',
              patientName: '',
              condition: ''
            };
            setFormData(prev => ({
              ...prev,
              testimonials: [...(prev.testimonials || []), newTestimonial]
            }));
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Testimonial
        </button>
      </div>
      
      {(formData.testimonials || []).map((testimonial, index) => (
        <div key={testimonial.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-900 dark:text-white">Testimonial {index + 1}</h4>
            <button
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  testimonials: prev.testimonials.filter((_, i) => i !== index)
                }));
              }}
              className="text-red-600 hover:text-red-700 p-1"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Quote</label>
            <textarea
              value={testimonial.quote}
              onChange={(e) => {
                const newTestimonials = [...formData.testimonials];
                newTestimonials[index] = { ...testimonial, quote: e.target.value };
                setFormData(prev => ({ ...prev, testimonials: newTestimonials }));
              }}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
              placeholder="Enter the testimonial quote..."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Patient Name</label>
              <input
                type="text"
                value={testimonial.patientName}
                onChange={(e) => {
                  const newTestimonials = [...formData.testimonials];
                  newTestimonials[index] = { ...testimonial, patientName: e.target.value };
                  setFormData(prev => ({ ...prev, testimonials: newTestimonials }));
                  setFormData(prev => ({ ...prev, testimonials: newTestimonials }));