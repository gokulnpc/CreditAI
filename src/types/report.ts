export interface Report {
  id: string;
  name: string;
  type: 'report';
  status: 'completed' | 'failed';
  date: string;
  sections: string[];
  includeCharts: boolean;
  description?: string;
  result?: any;
  hash?: string;
}

export interface ReportConfig {
  name: string;
  sections: string[];
  includeCharts: boolean;
  description?: string;
}