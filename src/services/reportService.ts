import { v4 as uuidv4 } from 'uuid';
import { Report, ReportConfig } from '../types/report';
import { MOCK_FINANCIAL_DATA, generateMockCharts } from './mockData';

export const reportService = {
  generateReport: async (config: ReportConfig): Promise<Report> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate result based on selected sections
    const result: any = {
      metadata: {
        generatedAt: new Date().toISOString(),
        reportType: 'Custom Analysis',
        version: '1.0'
      }
    };

    // Map sections to mock data
    config.sections.forEach(section => {
      const key = section.toLowerCase().replace(/\s+/g, '');
      const mockDataKey = Object.keys(MOCK_FINANCIAL_DATA).find(k => 
        k.toLowerCase().includes(key.toLowerCase())
      );
      
      if (mockDataKey) {
        result[key] = MOCK_FINANCIAL_DATA[mockDataKey as keyof typeof MOCK_FINANCIAL_DATA];
      }
    });

    // Add charts if requested
    if (config.includeCharts) {
      result.charts = generateMockCharts();
    }

    // Create report object
    const report: Report = {
      id: uuidv4(),
      name: config.name,
      type: 'report',
      status: 'completed',
      date: new Date().toLocaleDateString(),
      sections: config.sections,
      includeCharts: config.includeCharts,
      description: config.description,
      result,
      hash: uuidv4()
    };

    return report;
  }
};