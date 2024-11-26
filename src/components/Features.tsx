import React from 'react';
import { FileText, Brain, LineChart, Lock, Users, MessageSquare } from 'lucide-react';
import Card from './Card';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: 'Smart Document Processing',
      description: 'Automated data extraction and classification from financial documents using advanced OCR and NLP.'
    },
    {
      icon: Brain,
      title: 'AI Underwriting',
      description: 'Machine learning algorithms that analyze credit risk and provide detailed financial assessments.'
    },
    {
      icon: LineChart,
      title: 'Financial Analytics',
      description: 'Real-time financial modeling and scenario analysis with predictive insights.'
    },
    {
      icon: Lock,
      title: 'Blockchain Security',
      description: 'Immutable audit trails and secure document storage powered by BlockConvey technology.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Streamlined workflow management with role-based access control and real-time updates.'
    },
    {
      icon: MessageSquare,
      title: 'AI Assistant',
      description: 'Intelligent chatbot for instant answers to queries about your financial data and reports.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Credit Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI with robust financial tools to transform your credit analysis workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="hover:scale-[1.02] transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;