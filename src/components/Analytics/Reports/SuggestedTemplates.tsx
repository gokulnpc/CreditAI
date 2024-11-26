import React from "react";
import { Database, CreditCard, Activity } from "lucide-react";

const templates = [
  {
    id: "dataroom",
    name: "Data Room Summary Report",
    description: "Cred template",
    icon: Database,
  },
  {
    id: "credit",
    name: "Credit Document Analysis",
    description: "Cred template",
    icon: CreditCard,
  },
  {
    id: "sensitivity",
    name: "Operating Sensitivities Report",
    description: "Cred template",
    icon: Activity,
  },
];

const SuggestedTemplates = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => {
        const Icon = template.icon;
        return (
          <div
            key={template.id}
            className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-50">
                <Icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
              </div>
              <button className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {template.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{template.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestedTemplates;
