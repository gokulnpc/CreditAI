import React, { useState } from "react";
import { FileText, Download, MoreVertical, Copy, Info } from "lucide-react";
import { storageService } from "../../services/storageService";
import DocumentInfoModal from "../DocumentInfoModal";

const RecentDocuments = () => {
  const storedDocuments = storageService.getProcessedDocuments();
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Analyzed";
      case "processing":
        return "Processing";
      case "failed":
        return "Failed";
      default:
        return "Pending";
    }
  };

  const handleDownload = (doc: any) => {
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

  const handleInfoClick = (doc: any) => {
    setSelectedDocument(doc);
    setIsInfoModalOpen(true);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction Hash
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {storedDocuments.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      {doc.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{doc.type}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{doc.size}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      doc.status
                    )}`}
                  >
                    {getStatusLabel(doc.status)}
                  </span>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {doc.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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

        {storedDocuments.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No documents processed yet. Upload documents to get started.
          </div>
        )}
      </div>

      <DocumentInfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        document={selectedDocument}
      />
    </>
  );
};

export default RecentDocuments;
