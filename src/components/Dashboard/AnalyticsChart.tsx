import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Radar, Doughnut } from 'react-chartjs-2';
import { BarChart2, LineChart, PieChart, Activity } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const chartTypes = [
  { id: 'revenue', label: 'Revenue Growth', icon: LineChart },
  { id: 'funding', label: 'Funding Rounds', icon: BarChart2 },
  { id: 'metrics', label: 'Key Metrics', icon: Activity },
  { id: 'distribution', label: 'Revenue Distribution', icon: PieChart }
];

const AnalyticsChart = () => {
  const [activeChart, setActiveChart] = useState('revenue');
  
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    }
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [1.2, 1.8, 2.3, 2.8, 3.5, 4.2],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: [0.8, 1.2, 1.5, 1.7, 2.0, 2.3],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.4,
      }
    ],
  };

  const fundingData = {
    labels: ['Seed', 'Series A', 'Series B', 'Series C'],
    datasets: [
      {
        label: 'Funding Amount ($M)',
        data: [2, 8, 15, 25],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(99, 102, 241, 0.8)',
          'rgba(245, 158, 11, 0.8)'
        ],
      }
    ],
  };

  const metricsData = {
    labels: ['Growth', 'Profitability', 'Efficiency', 'Innovation', 'Market Share', 'Customer Satisfaction'],
    datasets: [
      {
        label: 'Current Performance',
        data: [85, 72, 90, 78, 65, 88],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
      }
    ],
  };

  const distributionData = {
    labels: ['Enterprise', 'Mid-Market', 'SMB', 'Other'],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(99, 102, 241, 0.8)',
          'rgba(245, 158, 11, 0.8)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const renderChart = () => {
    switch (activeChart) {
      case 'revenue':
        return <Line options={commonOptions} data={revenueData} />;
      case 'funding':
        return <Bar options={commonOptions} data={fundingData} />;
      case 'metrics':
        return (
          <Radar
            options={{
              ...commonOptions,
              scales: {
                r: {
                  min: 0,
                  max: 100,
                  beginAtZero: true,
                  ticks: { stepSize: 20 }
                }
              }
            }}
            data={metricsData}
          />
        );
      case 'distribution':
        return <Doughnut options={commonOptions} data={distributionData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        {chartTypes.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveChart(id)}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeChart === id
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Icon className="h-4 w-4 mr-2" />
            {label}
          </button>
        ))}
      </div>
      <div className="h-[400px]">
        {renderChart()}
      </div>
    </div>
  );
};

export default AnalyticsChart;