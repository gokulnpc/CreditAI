import React, { useCallback } from 'react';
import { Upload, FileText } from 'lucide-react';

interface DocumentUploadProps {
  onFilesAdded: (files: File[]) => void;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ onFilesAdded }) => {
  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    onFilesAdded(droppedFiles);
  }, [onFilesAdded]);

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      onFilesAdded(selectedFiles);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors"
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-4">
          <p className="text-gray-600">
            Drag and drop your files here, or{' '}
            <label className="text-blue-600 hover:text-blue-700 cursor-pointer">
              browse
              <input
                type="file"
                multiple
                className="hidden"
                onChange={onFileSelect}
                accept=".pdf,.docx,.xlsx"
              />
            </label>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Supported formats: PDF, DOCX, XLSX (up to 50MB)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;