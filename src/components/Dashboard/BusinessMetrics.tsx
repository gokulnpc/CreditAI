import React from 'react';
import { BarChart2 } from 'lucide-react';

const metrics = [
  {
    category: 'Company Profile',
    items: [
      { label: 'Customer Tiering', value: 'Enterprise' },
      { label: 'Office Ownership', value: 'Leased' },
      { label: 'Length of Service', value: '5.2 years' },
      { label: 'Team Size', value: '125 people' }
    ]
  },
  {
    category: 'Financial Metrics',
    items: [
      { label: 'Revenue Growth Rate', value: '45.2%' },
      { label: 'Debt-to-Equity Ratio', value: '0.85' },
      { label: 'Current Ratio', value: '2.1' },
      { label: 'EBITDA', value: '$8.4M' }
    ]
  },
  {
    category: 'Market Analysis',
    items: [
      { label: 'Market Position', value: 'Leader' },
      { label: 'Barrier to Entry', value: 'High' },
      { label: 'Regulatory Environment', value: 'Moderate' },
      { label: 'Competitive Landscape', value: 'Strong' }
    ]
  }
];

const BusinessMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((section) => (
        <div key={section.category} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <BarChart2 className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">{section.category}</h3>
          </div>
          <div className="space-y-4">
            {section.items.map((item) => (
              <div key={item.label} className="flex justify-between">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="text-sm font-medium text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessMetrics;