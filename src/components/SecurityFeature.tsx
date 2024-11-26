import React from 'react';
import { LucideIcon, CheckCircle } from 'lucide-react';

interface SecurityFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  certifications?: string[];
}

const SecurityFeature: React.FC<SecurityFeatureProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  certifications 
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
      <div className="flex items-start">
        <Icon className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          {certifications && (
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {cert}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityFeature;