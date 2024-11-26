import { useState } from 'react';
import { ReportConfig } from '../types/report';
import { reportService } from '../services/reportService';
import { useReportQueue } from './useReportQueue';

const GENERATION_STEPS = [
  "Analyzing financial data...",
  "Processing market insights...",
  "Generating risk assessment...",
  "Creating visualizations...",
  "Compiling final report..."
];

export const useReportGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { addReport } = useReportQueue();

  const generateReport = async (config: ReportConfig) => {
    setIsGenerating(true);
    setError(null);

    try {
      // Simulate generation steps
      for (const step of GENERATION_STEPS) {
        setCurrentStep(step);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Generate report with mock data
      const report = await reportService.generateReport(config);
      
      // Store report
      const success = await addReport(report);
      
      if (!success) {
        throw new Error('Failed to save report');
      }

      return report;
    } catch (err) {
      console.error('Report generation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate report');
      return null;
    } finally {
      setIsGenerating(false);
      setCurrentStep('');
    }
  };

  return {
    isGenerating,
    currentStep,
    error,
    generateReport
  };
};