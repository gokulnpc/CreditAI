import React from 'react';
import { 
  FileText, 
  TrendingUp, 
  AlertCircle,
  Filter,
  Upload,
  Crown,
  CalendarIcon,
  Building2,
  DollarSign,
  Users,
  LineChart
} from 'lucide-react';
import StatCard from './StatCard';
import RecentDocuments from './RecentDocuments';
import AnalyticsChart from './AnalyticsChart';
import AlertsList from './AlertsList';
import IntelligenceScore from './IntelligenceScore';
import BusinessMetrics from './BusinessMetrics';

const DashboardOverview = () => {
  const hasDocuments = localStorage.getItem('documentsUploaded') === 'true';

  if (!hasDocuments) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-xl">
          <Upload className="mx-auto h-16 w-16 text-blue-600 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Upload Documents to Get Started
          </h2>
          <p className="text-gray-600 mb-8">
            To generate your personalized dashboard and insights, please upload your financial documents first.
          </p>
          <a 
            href="/dashboard/documents" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Upload Documents
            <Upload className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    );
  }

  const keyMetrics = [
    {
      label: 'Total Equity Raised',
      value: '$25.4M',
      change: '+12.3%',
      trend: 'up',
      icon: Building2
    },
    {
      label: 'Annual Revenue',
      value: '$18.7M',
      change: '+45.2%',
      trend: 'up',
      icon: DollarSign
    },
    {
      label: 'Monthly Burn Rate',
      value: '$850K',
      change: '-5.2%',
      trend: 'down',
      icon: LineChart
    },
    {
      label: 'Customer Base',
      value: '125+',
      change: '+15.3%',
      trend: 'up',
      icon: Users
    }
  ];

  const alerts = [
    {
      title: 'High Growth Alert',
      description: 'Revenue growth rate exceeds industry average by 2.5x',
      type: 'success',
      time: '2 hours ago'
    },
    {
      title: 'Burn Rate Analysis',
      description: 'Current runway estimated at 18 months based on burn rate',
      type: 'info',
      time: '4 hours ago'
    },
    {
      title: 'Customer Concentration Risk',
      description: 'Top 3 customers represent 45% of revenue',
      type: 'warning',
      time: '6 hours ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">Company Analysis</h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-white">
              <Crown className="h-3.5 w-3.5 mr-1" />
              PRO
            </span>
          </div>
          <p className="text-gray-600">Comprehensive financial and operational insights</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Last 30 Days
          </button>
          <button className="flex items-center px-4 py-2 text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <StatCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Financial Performance</h3>
            </div>
            <AnalyticsChart />
          </div>
        </div>

        {/* Intelligence Score */}
        <div>
          <IntelligenceScore />
        </div>
      </div>

      {/* Business Metrics */}
      <BusinessMetrics />

      {/* Recent Documents */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Recent Documents</h3>
        </div>
        <RecentDocuments />
      </div>
    </div>
  );
};

export default DashboardOverview;