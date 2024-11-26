import React from 'react';
import { Building2, Briefcase, Building, LineChart } from 'lucide-react';
import SolutionCard from './SolutionCard';

const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Institutional Lenders',
      description: 'Streamline credit analysis and risk assessment for large-scale lending operations.',
      benefits: [
        'Automated financial statement analysis',
        'Risk scoring with AI-powered insights',
        'Customizable lending criteria templates',
        'Portfolio monitoring and alerts'
      ]
    },
    {
      icon: Briefcase,
      title: 'Private Equity Firms',
      description: 'Enhance due diligence and portfolio company monitoring processes.',
      benefits: [
        'Deal flow management automation',
        'Company performance tracking',
        'Investment thesis validation',
        'Competitive landscape analysis'
      ]
    },
    {
      icon: Building,
      title: 'Asset Managers',
      description: 'Optimize investment decisions with comprehensive market analysis.',
      benefits: [
        'Portfolio risk assessment',
        'Market trend analysis',
        'Asset allocation optimization',
        'Real-time performance tracking'
      ]
    },
    {
      icon: LineChart,
      title: 'Investment Banks',
      description: 'Accelerate deal execution with automated financial analysis.',
      benefits: [
        'Deal pipeline management',
        'Automated valuation models',
        'Industry comparison metrics',
        'Transaction documentation automation'
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tailored Solutions for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform transforms credit analysis across different sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              benefits={solution.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;