import React from 'react';
import { Menu, X, ChevronDown, Shield, Bot, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">CreditAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 flex items-center">
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-blue-600">Solutions</a>
            <a href="#security" className="text-gray-600 hover:text-blue-600">Security</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Request Demo
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600">Features</a>
            <a href="#solutions" className="block px-3 py-2 text-gray-600">Solutions</a>
            <a href="#security" className="block px-3 py-2 text-gray-600">Security</a>
            <a href="#about" className="block px-3 py-2 text-gray-600">About</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Request Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;