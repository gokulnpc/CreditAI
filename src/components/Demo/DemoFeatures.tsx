import React from 'react';
import { Upload, BarChart2, MessageSquare, FileText } from 'lucide-react';

const DemoFeatures = () => {
  const features = [
    {
      icon: Upload,
      title: 'Easy Data Upload',
      description: 'Connect your data sources or upload files directly'
    },
    {
      icon: BarChart2,
      title: 'Interactive Dashboard',
      description: 'Real-time analytics and financial insights'
    },
    {
      icon: MessageSquare,
      title: 'AI Assistant',
      description: 'Get instant answers about your data'
    },
    {
      icon: FileText,
      title: 'Custom Reports',
      description: 'Generate professional reports in minutes'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="absolute top-6 right-6">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DemoFeatures;