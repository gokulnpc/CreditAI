import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useReportGeneration } from '../../hooks/useReportGeneration';
import ProcessingOverlay from '../Upload/ProcessingOverlay';

interface NewReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const NewReportModal: React.FC<NewReportModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [reportName, setReportName] = useState('');
  const [description, setDescription] = useState('');
  const [includeCharts, setIncludeCharts] = useState(true);
  const [selectedSections, setSelectedSections] = useState<Set<string>>(new Set());

  const { isGenerating, currentStep, generateReport } = useReportGeneration();

  if (!isOpen) return null;

  const sections = {
    'Executive Summary': ['Overview', 'Key Findings', 'Recommendations'],
    'Financial Analysis': ['Revenue Analysis', 'Cost Structure', 'Profitability Metrics'],
    'Market Analysis': ['Market Size', 'Competitive Landscape', 'Growth Opportunities'],
    'Risk Assessment': ['Key Risks', 'Mitigations', 'Risk Matrix']
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (reportName.trim() === '' || selectedSections.size === 0) return;

    const report = await generateReport({
      name: reportName,
      sections: Array.from(selectedSections),
      includeCharts,
      description
    });

    if (report) {
      onSuccess?.();
      onClose();
      // Reset form
      setReportName('');
      setDescription('');
      setIncludeCharts(true);
      setSelectedSections(new Set());
    }
  };

  const toggleSection = (section: string) => {
    setSelectedSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };

  const toggleCategory = (category: string, items: string[]) => {
    setSelectedSections(prev => {
      const next = new Set(prev);
      const allSelected = items.every(item => prev.has(item));
      
      if (allSelected) {
        items.forEach(item => next.delete(item));
      } else {
        items.forEach(item => next.add(item));
      }
      
      return next;
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Create Custom Report</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Report Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Name
            </label>
            <input
              type="text"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter report name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Enter report description"
            />
          </div>

          {/* Sections */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Select Sections
            </label>
            <div className="space-y-6">
              {Object.entries(sections).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={items.every(item => selectedSections.has(item))}
                      onChange={() => toggleCategory(category, items)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      {category}
                    </span>
                  </div>
                  <div className="ml-6 space-y-2">
                    {items.map(item => (
                      <div key={item} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedSections.has(item)}
                          onChange={() => toggleSection(item)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Include Charts */}
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <span className="text-sm text-gray-700">Include visualizations and charts</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={includeCharts}
                onChange={(e) => setIncludeCharts(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={reportName.trim() === '' || selectedSections.size === 0 || isGenerating}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Generate Report
            </button>
          </div>
        </form>
      </div>

      {isGenerating && <ProcessingOverlay currentStep={currentStep} />}
    </div>
  );
};

export default NewReportModal;