import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface NewReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Section {
  title: string;
  items: string[];
  selected: Set<string>;
}

const NewReportModal: React.FC<NewReportModalProps> = ({ isOpen, onClose }) => {
  const [reportName, setReportName] = useState('');
  const [includeCharts, setIncludeCharts] = useState(true);
  const [sections, setSections] = useState<Section[]>([
    {
      title: 'Executive summary',
      items: ['Opportunity overview', 'Strengths', 'Risks'],
      selected: new Set()
    },
    {
      title: 'Company',
      items: ['Company overview', 'Management', 'Investors', 'Competitors', 'News'],
      selected: new Set()
    },
    {
      title: 'Financial statements',
      items: ['Income statement', 'Balance sheet', 'Cash flow statement', 'Capitalization table'],
      selected: new Set()
    },
    {
      title: 'Financial analysis',
      items: ['Retention analysis', 'Customer analysis', 'Financial ratios', 'Cash flow analysis', 'Credit metrics'],
      selected: new Set()
    },
    {
      title: 'Financial projections',
      items: ['Management forecast', 'Operating sensitivities', 'Debt schedule'],
      selected: new Set()
    },
    {
      title: 'Valuation',
      items: ['Precedent transactions', 'Public comparable companies', 'Discounted cash flow analysis'],
      selected: new Set()
    }
  ]);

  if (!isOpen) return null;

  const handleSelectItem = (sectionIndex: number, item: string) => {
    const newSections = [...sections];
    const section = newSections[sectionIndex];
    const newSelected = new Set(section.selected);
    
    if (newSelected.has(item)) {
      newSelected.delete(item);
    } else {
      newSelected.add(item);
    }
    
    section.selected = newSelected;
    setSections(newSections);
  };

  const handleSelectAll = (sectionIndex: number) => {
    const newSections = [...sections];
    const section = newSections[sectionIndex];
    const allSelected = section.items.length === section.selected.size;
    
    section.selected = allSelected ? new Set() : new Set(section.items);
    setSections(newSections);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedItems = sections.reduce((acc, section) => {
      return {
        ...acc,
        [section.title]: Array.from(section.selected)
      };
    }, {});

    console.log({
      reportName,
      includeCharts,
      selectedItems
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Create a new report</h2>
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
              Report name
            </label>
            <input
              type="text"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              placeholder="Enter report name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Format
            </label>
            <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
              <span className="text-sm text-gray-700">Include charts</span>
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
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, sectionIndex) => (
              <div key={section.title} className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 rounded-t-lg">
                  <h3 className="text-sm font-medium text-gray-700">{section.title}</h3>
                </div>
                <div className="p-4 space-y-3">
                  {section.items.map((item) => (
                    <label key={item} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={section.selected.has(item)}
                        onChange={() => handleSelectItem(sectionIndex, item)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </label>
                  ))}
                  <label className="flex items-center space-x-3 border-t border-gray-200 pt-3 mt-3">
                    <input
                      type="checkbox"
                      checked={section.items.length === section.selected.size}
                      onChange={() => handleSelectAll(sectionIndex)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Select all</span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="sticky bottom-0 bg-white pt-4 border-t border-gray-200 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-lg hover:bg-gray-900"
            >
              Generate report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewReportModal;