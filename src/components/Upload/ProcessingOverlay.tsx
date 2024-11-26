import React from 'react';
import { Loader } from 'lucide-react';

interface ProcessingOverlayProps {
  currentStep: string;
}

const ProcessingOverlay: React.FC<ProcessingOverlayProps> = ({ currentStep }) => {
  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex flex-col items-center">
          <Loader className="h-12 w-12 text-blue-600 animate-spin mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Processing Documents
          </h2>
          <div className="space-y-4 w-full">
            <div className="text-center text-gray-600">
              {currentStep}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }} />
            </div>
            <p className="text-sm text-gray-500 text-center">
              Please don't close this window while we process your documents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingOverlay;