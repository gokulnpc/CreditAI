import React from 'react';

interface ReportSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  {
    title: 'Executive summary',
    items: ['Opportunity overview', 'Strengths', 'Risks']
  },
  {
    title: 'Company',
    items: ['Company overview', 'Management', 'Investors']
  },
  {
    title: 'Financial statements',
    items: ['Income statement', 'Balance sheet', 'Cash flow statement']
  },
  {
    title: 'Financial analysis',
    items: ['Retention analysis', 'Customer analysis']
  }
];

const ReportSidebar: React.FC<ReportSidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <nav className="p-4 space-y-6">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const itemId = item.toLowerCase().replace(/\s+/g, '-');
              return (
                <li key={item}>
                  <button
                    onClick={() => onSectionChange(itemId)}
                    className={`w-full text-left px-2 py-1.5 text-sm rounded-md ${
                      activeSection === itemId
                        ? 'bg-gray-100 text-gray-900 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default ReportSidebar;