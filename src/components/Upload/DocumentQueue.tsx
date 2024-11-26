import React, { useState } from "react";
import {
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  Download,
  Copy,
} from "lucide-react";
import DocumentInfoModal from "../DocumentInfoModal";

interface QueuedDocument {
  id: string;
  name: string;
  status: "pending" | "processing" | "completed" | "failed";
  type: string;
  size: string;
  date: string;
  hash?: string;
  error?: string;
  result?: any;
}

interface DocumentQueueProps {
  documents: QueuedDocument[];
  selectedDocuments: Set<string>;
  onSelectDocument: (id: string) => void;
  onSelectAll: (selected: boolean) => void;
  onProcessSelected: () => void;
}

const DocumentQueue: React.FC<DocumentQueueProps> = ({
  documents,
  selectedDocuments,
  onSelectDocument,
  onSelectAll,
  onProcessSelected,
}) => {
  const [selectedDocument, setSelectedDocument] =
    useState<QueuedDocument | null>(null);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const getStatusIcon = (status: QueuedDocument["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-gray-400" />;
      case "processing":
        return (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600" />
        );
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "failed":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const allSelected =
    documents.length > 0 && selectedDocuments.size === documents.length;
  const someSelected =
    selectedDocuments.size > 0 && selectedDocuments.size < documents.length;

  const handleInfoClick = (doc: QueuedDocument) => {
    setSelectedDocument(doc);
    setIsInfoModalOpen(true);
  };

  const handleDownload = (doc: QueuedDocument) => {
    if (!doc.result) return;

    const blob = new Blob([JSON.stringify(doc.result, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.name.split(".")[0]}_analysis.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Documents Queue
              </h3>
              <div className="ml-2 text-sm text-gray-500">
                ({selectedDocuments.size} selected)
              </div>
            </div>
            <button
              onClick={() => onProcessSelected()}
              disabled={selectedDocuments.size === 0}
              className={`px-4 py-2 rounded-lg text-white ${
                selectedDocuments.size === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Process Selected
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    ref={(input) => {
                      if (input) {
                        input.indeterminate = someSelected && !allSelected;
                      }
                    }}
                    onChange={(e) => onSelectAll(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction Hash
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr
                  key={doc.id}
                  className={
                    selectedDocuments.has(doc.id) ? "bg-blue-50" : undefined
                  }
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedDocuments.has(doc.id)}
                      onChange={() => onSelectDocument(doc.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">
                        {doc.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(doc.status)}
                      <span className="ml-2 text-sm text-gray-500 capitalize">
                        {doc.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {doc.hash ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono text-gray-500">
                          {doc.hash.substring(0, 8)}...
                          {doc.hash.substring(doc.hash.length - 8)}
                        </span>
                        <button
                          onClick={() => copyToClipboard(doc.hash!)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="Copy hash"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      {doc.status === "completed" && (
                        <button
                          onClick={() => handleDownload(doc)}
                          className="text-gray-400 hover:text-gray-500"
                          title="Download analysis"
                        >
                          <Download className="h-5 w-5" />
                        </button>
                      )}
                      <button
                        onClick={() => handleInfoClick(doc)}
                        className="text-gray-400 hover:text-gray-500"
                        title="View details"
                      >
                        <Info className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedDocument && (
        <DocumentInfoModal
          isOpen={isInfoModalOpen}
          onClose={() => setIsInfoModalOpen(false)}
          document={selectedDocument}
        />
      )}
    </>
  );
};

export default DocumentQueue;
