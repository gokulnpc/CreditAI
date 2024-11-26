import React from 'react';
import { Bot, Shield, BarChart3 } from 'lucide-react';

const Hero = () => {
  const handleDemoClick = () => {
    window.location.href = '/demo';
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Private Credit with
            <span className="text-blue-600"> AI-Powered</span> Intelligence
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline underwriting, enhance document management, and unlock deep financial insights with cutting-edge AI and blockchain technology.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button 
              onClick={handleDemoClick}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Watch Demo
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Bot className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600">Advanced machine learning algorithms for comprehensive financial analysis and insights.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Shield className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-600">SOC 2 compliant with blockchain-backed data integrity and encryption.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-gray-600">Instant insights and customizable dashboards for informed decision-making.</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;