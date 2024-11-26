import { useState, useCallback } from 'react';
import { QueuedDocument } from '../types/document';
import { getFileType } from '../utils/fileUtils';

export const useDocumentQueue = () => {
  const [queuedDocuments, setQueuedDocuments] = useState<QueuedDocument[]>([]);
  const [selectedDocuments, setSelectedDocuments] = useState<Set<string>>(new Set());

  const addDocuments = useCallback((files: File[]) => {
    const newDocuments: QueuedDocument[] = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      status: "pending",
      type: getFileType(file),
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      date: new Date().toLocaleDateString(),
      hash: undefined,
      file: file,
    }));

    setQueuedDocuments((prev) => [...prev, ...newDocuments]);
    setSelectedDocuments((prev) => new Set([...prev, ...newDocuments.map(doc => doc.id)]));
    
    return newDocuments;
  }, []);

  const updateDocument = useCallback((id: string, updates: Partial<QueuedDocument>) => {
    setQueuedDocuments((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, ...updates } : doc))
    );
  }, []);

  const toggleDocument = useCallback((id: string) => {
    setSelectedDocuments((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const toggleAllDocuments = useCallback((selected: boolean) => {
    if (selected) {
      const allIds = queuedDocuments.map((doc) => doc.id);
      setSelectedDocuments(new Set(allIds));
    } else {
      setSelectedDocuments(new Set());
    }
  }, [queuedDocuments]);

  return {
    queuedDocuments,
    setQueuedDocuments,
    selectedDocuments,
    addDocuments,
    updateDocument,
    toggleDocument,
    toggleAllDocuments
  };
};