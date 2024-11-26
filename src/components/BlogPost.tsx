import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface BlogPostProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  image, 
  title, 
  excerpt, 
  date, 
  readTime, 
  category 
}) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          {readTime} read
        </div>
      </div>
    </article>
  );
};

export default BlogPost;