import React from 'react';
import { Brain, Info } from 'lucide-react';

const categories = [
  { name: 'Market Position', score: 85 },
  { name: 'Financial Health', score: 78 },
  { name: 'Operational Efficiency', score: 92 },
  { name: 'Risk Profile', score: 75 }
];

const IntelligenceScore = () => {
  const overallScore = Math.round(
    categories.reduce((acc, cat) => acc + cat.score, 0) / categories.length
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Brain className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold">Intelligence Insight Score</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <Info className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <svg className="w-32 h-32">
            <circle
              className="text-gray-200"
              strokeWidth="12"
              stroke="currentColor"
              fill="transparent"
              r="56"
              cx="64"
              cy="64"
            />
            <circle
              className="text-blue-600"
              strokeWidth="12"
              strokeDasharray={350}
              strokeDashoffset={350 - (350 * overallScore) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="56"
              cx="64"
              cy="64"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-3xl font-bold text-gray-900">{overallScore}</span>
            <span className="text-gray-500 text-sm">/100</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-600">{category.name}</span>
              <span className="text-sm font-medium text-gray-900">{category.score}/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${category.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntelligenceScore;