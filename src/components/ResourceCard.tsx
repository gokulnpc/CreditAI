import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  type: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  type 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all group">
      <Icon className="h-8 w-8 text-blue-600 mb-4" />
      <div className="text-sm font-medium text-gray-500 mb-2">{type}</div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
        Learn More <ArrowRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  );
};

export default ResourceCard;