import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';

const MetricsGrid = () => {
  const metrics = {
    'Company Characteristics': [
      { label: 'Founder Reputation', value: '4.8/5.0' },
      { label: 'Company Reputation', value: '4.5/5.0' },
      { label: 'Market Position', value: 'Leader' },
      { label: 'Barrier to Entry', value: 'High' }
    ],
    'Financial Health': [
      { label: 'Debt-to-Equity Ratio', value: '0.85' },
      { label: 'Current Ratio', value: '2.1' },
      { label: 'EBITDA', value: '$8.4M' },
      { label: 'Return on Equity', value: '18.2%' }
    ],
    'Operational Metrics': [
      { label: 'Customer Tiering', value: 'Enterprise' },
      { label: 'Team Size', value: '125' },
      { label: 'Revenue Growth Rate', value: '45.2%' },
      { label: 'Cash Conversion Cycle', value: '45 days' }
    ]
  };

  const customerSegmentationData = {
    labels: ['Enterprise', 'Mid-Market', 'SMB'],
    datasets: [{
      data: [45, 35, 20],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(99, 102, 241, 0.8)'
      ],
      borderWidth: 1
    }]
  };

  const revenueCompositionData = {
    labels: ['Product A', 'Product B', 'Product C', 'Services'],
    datasets: [{
      label: 'Revenue Composition',
      data: [35, 25, 20, 20],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(99, 102, 241, 0.8)',
        'rgba(245, 158, 11, 0.8)'
      ],
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 12,
          padding: 15
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Metrics Cards */}
      {Object.entries(metrics).map(([category, items]) => (
        <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">{category}</h3>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="text-sm font-medium text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Customer Segmentation Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Customer Segmentation</h3>
        <div className="h-[200px]">
          <Doughnut data={customerSegmentationData} options={chartOptions} />
        </div>
      </div>

      {/* Revenue Composition Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Revenue Composition</h3>
        <div className="h-[200px]">
          <Bar 
            data={revenueCompositionData} 
            options={{
              ...chartOptions,
              indexAxis: 'y' as const,
              plugins: {
                legend: {
                  display: false
                }
              }
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default MetricsGrid;