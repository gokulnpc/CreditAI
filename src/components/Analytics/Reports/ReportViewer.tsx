import React from 'react';
import { ArrowLeft, Download, Edit } from 'lucide-react';
import ReportContent from './ReportContent';
import ReportSidebar from './ReportSidebar';

interface ReportViewerProps {
  reportId: string;
  onBack: () => void;
}

const ReportViewer: React.FC<ReportViewerProps> = ({ reportId, onBack }) => {
  const [activeSection, setActiveSection] = React.useState('executive-summary');

  return (
    <div className="h-[calc(100vh-12rem)] flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 overflow-y-auto">
        <ReportSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="mr-4 text-gray-400 hover:text-gray-500"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  BlueSky Opportunity Memo
                </h1>
                <p className="text-sm text-gray-500">Generated today</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-gray-500">
                <Download className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-500">
                <Edit className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <ReportContent section={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default ReportViewer;