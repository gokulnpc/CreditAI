import React from 'react';
import { FileText, Video, BookOpen, Download } from 'lucide-react';
import ResourceCard from './ResourceCard';

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Private Credit Analysis Whitepaper',
      description: 'In-depth analysis of AI-powered credit assessment methodologies.',
      type: 'Whitepaper'
    },
    {
      icon: Video,
      title: 'Platform Demo Videos',
      description: 'Step-by-step tutorials and feature demonstrations.',
      type: 'Video Series'
    },
    {
      icon: BookOpen,
      title: 'Implementation Guide',
      description: 'Best practices for deploying AI in credit workflows.',
      type: 'Guide'
    },
    {
      icon: Download,
      title: 'Case Studies',
      description: 'Real-world success stories from our enterprise clients.',
      type: 'Case Study'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resources & Downloads
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of resources to help you get the most out of our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;