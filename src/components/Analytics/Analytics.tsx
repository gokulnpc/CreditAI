import React from 'react';
import Reports from './Reports/Reports';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600">Generate and manage your financial reports</p>
      </div>

      <Reports />
    </div>
  );
};

export default Analytics;