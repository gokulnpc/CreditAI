import React from "react";
import { X } from "lucide-react";

interface DocumentInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: any;
}

const DocumentInfoModal: React.FC<DocumentInfoModalProps> = ({
  isOpen,
  onClose,
  document,
}) => {
  if (!isOpen) return null;

  const formatJson = (data: any) => {
    return JSON.stringify(data, null, 2);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Document Analysis Result
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Document Information
              </h3>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="text-sm text-gray-900">{document.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="text-sm text-gray-900">{document.status}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Type</dt>
                  <dd className="text-sm text-gray-900">{document.type}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Size</dt>
                  <dd className="text-sm text-gray-900">{document.size}</dd>
                </div>
                {document.hash && (
                  <div className="col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Transaction Hash
                    </dt>
                    <dd className="text-sm font-mono text-gray-900">
                      {document.hash}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {document.result && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Analysis Result
                </h3>
                <pre className="bg-gray-50 p-4 rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap">
                  {formatJson(document.result)}
                </pre>
              </div>
            )}

            {document.error && (
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-red-800 mb-2">Error</h3>
                <p className="text-sm text-red-700">{document.error}</p>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentInfoModal;
