import React from 'react';
import { Search } from 'lucide-react';

interface SuggestedQueriesProps {
  onSelect: (query: string) => void;
}

const SuggestedQueries: React.FC<SuggestedQueriesProps> = ({ onSelect }) => {
  const queries = [
    'Show me revenue growth trends',
    'Analyze customer retention',
    'Summarize financial health',
    'Compare with industry benchmarks'
  ];

  return (
    <div className="mb-4">
      <div className="flex items-center space-x-2 mb-2">
        <Search className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-500">Suggested questions</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {queries.map((query) => (
          <button
            key={query}
            onClick={() => onSelect(query)}
            className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {query}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQueries;