import React from 'react';
import { BarChart2 } from 'lucide-react';

interface ReportContentProps {
  section: string;
}

const ReportContent: React.FC<ReportContentProps> = ({ section }) => {
  const getContent = () => {
    switch (section) {
      case 'opportunity-overview':
        return (
          <div className="prose max-w-none">
            <h2>Opportunity Overview</h2>
            <p>
              BlueSky Software, a leading provider of cloud-based enterprise solutions
              specializing in scalable project management and collaboration tools for mid-to-
              large-sized organizations, has approached Lender Capital to explore strategic
              financing options to replace their $15 million Triple Point debt due May 2026.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <div className="flex items-start space-x-4">
                <BarChart2 className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Key Metrics</h3>
                  <dl className="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm text-gray-500">ARR</dt>
                      <dd className="text-lg font-medium text-gray-900">$25M</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Growth Rate</dt>
                      <dd className="text-lg font-medium text-gray-900">45%</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        );
      case 'strengths':
        return (
          <div className="prose max-w-none">
            <h2>Strengths</h2>
            <ul>
              <li>Consistent and strong revenue growth while achieving and growing bottom-line profitability</li>
              <li>High customer retention rates and expanding relationships</li>
              <li>Experienced management team with proven track record</li>
            </ul>
          </div>
        );
      default:
        return (
          <div className="text-gray-500">Select a section from the sidebar to view content.</div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {getContent()}
    </div>
  );
};

export default ReportContent;