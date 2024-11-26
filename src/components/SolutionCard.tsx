import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon: Icon, title, description, benefits }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
      <Icon className="h-12 w-12 text-blue-600 mb-6" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolutionCard;