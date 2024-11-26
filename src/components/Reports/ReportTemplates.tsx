import React from 'react';
import { BarChart2, FileText, TrendingUp, PieChart } from 'lucide-react';

const templates = [
  {
    id: 'benchmark',
    name: 'Portfolio Benchmarking',
    description: 'Compare portfolio performance against industry standards',
    icon: BarChart2,
    color: 'bg-blue-500'
  },
  {
    id: 'screening',
    name: 'Initial Screening Memo',
    description: 'Comprehensive analysis for new investment opportunities',
    icon: FileText,
    color: 'bg-green-500'
  },
  {
    id: 'sensitivity',
    name: 'Operating Sensitivity',
    description: 'Analyze impact of variable changes on performance',
    icon: TrendingUp,
    color: 'bg-purple-500'
  },
  {
    id: 'custom',
    name: 'Custom Report',
    description: 'Create a fully customized report from scratch',
    icon: PieChart,
    color: 'bg-orange-500'
  }
];

const ReportTemplates = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Report Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {templates.map((template) => {
          const Icon = template.icon;
          return (
            <div
              key={template.id}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
            >
              <div className={`inline-flex p-3 rounded-lg ${template.color} bg-opacity-10 mb-4`}>
                <Icon className={`h-6 w-6 ${template.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{template.name}</h3>
              <p className="text-sm text-gray-500">{template.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReportTemplates;