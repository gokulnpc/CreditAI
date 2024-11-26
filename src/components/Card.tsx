import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${className}`}>
      <Icon className="h-10 w-10 text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;