import { useState, useCallback } from 'react';
import { Report } from '../types/report';
import { storageService } from '../services/storageService';

export const useReportQueue = () => {
  const [reports, setReports] = useState<Report[]>([]);

  const loadReports = useCallback(async () => {
    const storedDocs = storageService.getProcessedDocuments();
    const reportDocs = storedDocs.filter(doc => doc.type === 'report') as Report[];
    setReports(reportDocs);
  }, []);

  const addReport = useCallback(async (report: Report) => {
    try {
      await storageService.storeDocument(report);
      await loadReports();
      return true;
    } catch (error) {
      console.error('Error adding report:', error);
      return false;
    }
  }, [loadReports]);

  return {
    reports,
    loadReports,
    addReport
  };
};