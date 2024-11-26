import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  linkedin?: string;
  twitter?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, linkedin, twitter }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600 mb-3">{role}</p>
      <div className="flex justify-center space-x-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMember;