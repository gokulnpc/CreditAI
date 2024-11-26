import { v4 as uuidv4 } from 'uuid';

export const MOCK_FINANCIAL_DATA = {
  overview: {
    companyName: "TechCorp Solutions",
    industry: "Software & Technology",
    analysisDate: new Date().toLocaleDateString(),
    founderReputation: "4.8/5.0",
    companyReputation: "4.5/5.0",
    marketPosition: "Leader",
    barrierToEntry: "High",
    regulatoryEnvironment: "Moderate",
    competitiveLandscape: {
      competitors: 12,
      marketShare: "15%",
      strengthAssessment: "Strong"
    }
  },
  financialMetrics: {
    revenue: {
      current: "$18.7M",
      growth: "45.2%",
      trend: [12.5, 15.2, 18.7, 25.4]
    },
    funding: {
      totalRaised: "$25.4M",
      lastRound: "Series B",
      burnRate: "$850K/month",
      runway: "18 months"
    },
    ratios: {
      debtToEquity: 0.85,
      currentRatio: 2.1,
      ebitda: "$8.4M",
      returnOnEquity: "18.2%"
    }
  },
  operationalMetrics: {
    customerMetrics: {
      tiering: "Enterprise",
      diversity: "85/100",
      concentration: "Low Risk",
      satisfaction: "4.6/5.0"
    },
    teamMetrics: {
      size: 125,
      satisfaction: "4.2/5.0",
      turnover: "8%",
      productivity: "High"
    },
    efficiency: {
      cashConversionCycle: "45 days",
      operatingMargin: "24%",
      resourceUtilization: "92%"
    }
  }
};

export const generateMockCharts = () => ({
  revenueGrowth: {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Revenue ($M)',
        data: [12.5, 15.2, 18.7, 25.4],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
      }]
    }
  },
  fundingAnalysis: {
    type: 'bar',
    data: {
      labels: ['Seed', 'Series A', 'Series B'],
      datasets: [{
        label: 'Funding Amount ($M)',
        data: [2.5, 8.0, 15.0],
        backgroundColor: 'rgba(16, 185, 129, 0.8)'
      }]
    }
  },
  operationalMetrics: {
    type: 'radar',
    data: {
      labels: ['Customer Satisfaction', 'Team Performance', 'Market Position', 'Financial Health', 'Innovation'],
      datasets: [{
        label: 'Current Performance',
        data: [4.6, 4.2, 4.8, 4.1, 4.5],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.2)'
      }]
    }
  }
});

export const generateMockReport = (sections: string[]) => {
  const report: any = {
    id: uuidv4(),
    metadata: {
      generatedAt: new Date().toISOString(),
      version: '1.0'
    }
  };

  sections.forEach(section => {
    switch (section.toLowerCase()) {
      case 'overview':
        report.overview = MOCK_FINANCIAL_DATA.overview;
        break;
      case 'financial metrics':
        report.financialMetrics = MOCK_FINANCIAL_DATA.financialMetrics;
        break;
      case 'operational metrics':
        report.operationalMetrics = MOCK_FINANCIAL_DATA.operationalMetrics;
        break;
      // Add more sections as needed
    }
  });

  return report;
};