import React from 'react';
import { MoreHorizontal, Clock } from 'lucide-react';

interface Report {
  id: string;
  name: string;
  status: 'ready' | 'generating';
  date: string;
  thumbnail: string;
}

interface ReportsListProps {
  searchQuery: string;
  onReportClick: (id: string) => void;
}

const ReportsList: React.FC<ReportsListProps> = ({ searchQuery, onReportClick }) => {
  const reports: Report[] = [
    {
      id: '1',
      name: 'Portfolio Benchmarking Analysis',
      status: 'ready',
      date: 'Generated today',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      id: '2',
      name: 'Initial Screening Memo',
      status: 'ready',
      date: 'Generated today',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      id: '3',
      name: 'Investment Committee Memo',
      status: 'generating',
      date: 'Generating...',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    }
  ];

  const filteredReports = reports.filter(report =>
    report.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredReports.map((report) => (
        <div
          key={report.id}
          className="group relative bg-black rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500"
          onClick={() => onReportClick(report.id)}
        >
          <img
            src={report.thumbnail}
            alt={report.name}
            className="w-full h-48 object-cover opacity-80 group-hover:opacity-90 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-medium mb-1">{report.name}</h3>
                  <div className="flex items-center">
                    {report.status === 'ready' ? (
                      <span className="text-green-400 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5" />
                        Ready
                      </span>
                    ) : (
                      <span className="text-blue-400 text-sm flex items-center">
                        <Clock className="w-3 h-3 mr-1.5" />
                        {report.date}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle more options
                  }}
                >
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportsList;