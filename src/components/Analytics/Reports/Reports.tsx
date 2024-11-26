import React, { useState } from 'react';
import { Plus, Search, ArrowUpRight } from 'lucide-react';
import ReportsList from './ReportsList';
import NewReportModal from './NewReportModal';
import SuggestedTemplates from './SuggestedTemplates';
import ReportViewer from './ReportViewer';

const Reports = () => {
  const [isNewReportModalOpen, setIsNewReportModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeReport, setActiveReport] = useState<string | null>(null);

  if (activeReport) {
    return (
      <ReportViewer
        reportId={activeReport}
        onBack={() => setActiveReport(null)}
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Search and Actions */}
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-primary">
            <ArrowUpRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsNewReportModalOpen(true)}
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light"
          >
            <Plus className="h-5 w-5 mr-2" />
            Custom Report
          </button>
        </div>
      </div>

      {/* Your Reports */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Your Reports</h2>
        <ReportsList
          searchQuery={searchQuery}
          onReportClick={(id) => setActiveReport(id)}
        />
      </div>

      {/* Suggested Templates */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Suggested Templates</h2>
        <SuggestedTemplates />
      </div>

      {/* New Report Modal */}
      <NewReportModal
        isOpen={isNewReportModalOpen}
        onClose={() => setIsNewReportModalOpen(false)}
      />
    </div>
  );
};

export default Reports;