import React, { useState } from 'react';
import { LogOut, Eye, CreditCard as Edit3, Trash2, Plus, GripVertical, Settings, Users, FileText, MessageSquare, Phone, EyeOff } from 'lucide-react' DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Section, SiteContent } from '../../types';

interface AdminDashboardProps {
  onLogout: () => void;
  siteContent: SiteContent;
  onUpdateContent: (content: SiteContent) => void;
}

interface SortableItemProps {
  section: Section;
  onEdit: (section: Section) => void;
  onDelete: (id: string) => void;
  onToggleVisibility: (id: string) => void;
}

function SortableItem({ section, onEdit, onDelete, onToggleVisibility }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const sectionIcons = {
    hero: FileText,
    about: FileText,
    services: Settings,
    team: Users,
    cases: FileText,
    testimonials: MessageSquare,
    contact: Phone
  };

  const IconComponent = sectionIcons[section.type] || FileText;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border ${
        section.visible ? 'border-green-200 dark:border-green-800' : 'border-gray-200 dark:border-gray-700'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab hover:cursor-grabbing text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <GripVertical className="h-5 w-5" />
          </div>
          
          <div className={`p-3 rounded-lg ${
            section.visible ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-700'
          }`}>
            <IconComponent className={`h-5 w-5 ${
              section.visible ? 'text-green-600 dark:text-green-400' : 'text-gray-500'
            }`} />
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {section.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
              {section.type} section
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onToggleVisibility(section.id)}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              section.visible
                ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            title={section.visible ? 'Hide section' : 'Show section'}
          >
            <Eye className="h-4 w-4" />
          </button>
          
          <button
            onClick={() => onEdit(section)}
            className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
            title="Edit section"
          >
            <Edit3 className="h-4 w-4" />
          </button>
          
          <button
            onClick={() => onDelete(section.id)}
            className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-200"
            title="Delete section"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function AdminDashboard({ onLogout, siteContent, onUpdateContent }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'sections' | 'team' | 'services' | 'cases' | 'testimonials'>('sections');
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = siteContent.sections.findIndex(section => section.id === active.id);
      const newIndex = siteContent.sections.findIndex(section => section.id === over.id);
      
      const newSections = arrayMove(siteContent.sections, oldIndex, newIndex);
      
      onUpdateContent({
        ...siteContent,
        sections: newSections.map((section, index) => ({
          ...section,
          order: index + 1
        }))
      });
    }
  };

  const handleEditSection = (section: Section) => {
    // In a real app, this would open an edit modal
    console.log('Edit section:', section);
  };

  const handleDeleteSection = (id: string) => {
    if (confirm('Are you sure you want to delete this section?')) {
      onUpdateContent({
        ...siteContent,
        sections: siteContent.sections.filter(section => section.id !== id)
      });
    }
  };

  const handleToggleVisibility = (id: string) => {
    onUpdateContent({
      ...siteContent,
      sections: siteContent.sections.map(section =>
        section.id === id ? { ...section, visible: !section.visible } : section
      )
    });
  };

  const tabs = [
    { id: 'sections', label: 'Page Sections', icon: FileText },
    { id: 'team', label: 'Team Members', icon: Users },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'cases', label: 'Case Studies', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Content Management Dashboard
            </h1>
            
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Sections Tab */}
        {activeTab === 'sections' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Page Sections</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Manage the sections that appear on your homepage. Drag to reorder, toggle visibility, or edit content.
                </p>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add Section</span>
              </button>
            </div>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={siteContent.sections.map(s => s.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-4">
                  {siteContent.sections
                    .sort((a, b) => a.order - b.order)
                    .map((section) => (
                      <SortableItem
                        key={section.id}
                        section={section}
                        onEdit={handleEditSection}
                        onDelete={handleDeleteSection}
                        onToggleVisibility={handleToggleVisibility}
                      />
                    ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>
        )}

        {/* Other tabs would show different content management interfaces */}
        {activeTab !== 'sections' && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {tabs.find(tab => tab.id === activeTab)?.label} Management
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content management for {activeTab} will be implemented here with full CRUD functionality.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}