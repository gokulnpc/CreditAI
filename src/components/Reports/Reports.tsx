import React, { useEffect } from 'react';
import { Plus, Filter, Search } from 'lucide-react';
import ReportTemplates from './ReportTemplates';
import ReportsList from './ReportsList';
import NewReportModal from './NewReportModal';
import { useReportQueue } from '../../hooks/useReportQueue';

const Reports = () => {
  const [isNewReportModalOpen, setIsNewReportModalOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterType, setFilterType] = React.useState('all');
  const { reports, loadReports } = useReportQueue();

  useEffect(() => {
    loadReports();
  }, [loadReports]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600">Generate and manage your financial reports</p>
        </div>
        <button
          onClick={() => setIsNewReportModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Report
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
          >
            <option value="all">All Types</option>
            <option value="custom">Custom Reports</option>
            <option value="template">Template Reports</option>
          </select>
        </div>
      </div>

      {/* Report Templates */}
      <ReportTemplates />

      {/* Reports List */}
      <ReportsList 
        reports={reports}
        searchQuery={searchQuery} 
        filterType={filterType} 
      />

      {/* New Report Modal */}
      <NewReportModal
        isOpen={isNewReportModalOpen}
        onClose={() => setIsNewReportModalOpen(false)}
        onSuccess={() => loadReports()}
      />
    </div>
  );
};

export default Reports;