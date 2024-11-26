import React from 'react';
import AnalyticsChart from '../Dashboard/AnalyticsChart';

const AnalyticsDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Performance Overview</h2>
        <AnalyticsChart />
      </div>
      {/* Add more analytics components here */}
    </div>
  );
};

export default AnalyticsDashboard;