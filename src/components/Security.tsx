import React from 'react';
import { Shield, Lock, Key, FileCheck, Server, Database } from 'lucide-react';
import SecurityFeature from './SecurityFeature';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption and security protocols protect your sensitive financial data.',
      certifications: ['SOC 2 Type II Certified', 'ISO 27001 Compliant']
    },
    {
      icon: Lock,
      title: 'Blockchain Data Integrity',
      description: 'Immutable audit trails and document verification using BlockConvey technology.',
      certifications: ['Blockchain-backed verification', 'Tamper-proof storage']
    },
    {
      icon: Key,
      title: 'Advanced Access Control',
      description: 'Granular permissions and role-based access management for team collaboration.',
      certifications: ['Multi-factor authentication', 'Single Sign-On (SSO) support']
    },
    {
      icon: FileCheck,
      title: 'Compliance Framework',
      description: 'Built-in compliance controls and reporting for regulatory requirements.',
      certifications: ['GDPR Compliant', 'CCPA Compliant']
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Cloud infrastructure with redundancy and disaster recovery capabilities.',
      certifications: ['99.9% Uptime SLA', '24/7 Infrastructure monitoring']
    },
    {
      icon: Database,
      title: 'Data Privacy',
      description: 'End-to-end encryption and secure data handling practices.',
      certifications: ['AES-256 Encryption', 'Regular security audits']
    }
  ];

  return (
    <section id="security" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise Security & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your data security is our top priority. Our platform meets the highest industry standards
            for security and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <SecurityFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              certifications={feature.certifications}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Download Security Whitepaper
          </button>
        </div>
      </div>
    </section>
  );
};

export default Security;