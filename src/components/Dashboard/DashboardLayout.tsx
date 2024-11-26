import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  BarChart2, 
  MessageSquare, 
  Settings,
  Bot,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { icon: FileText, label: 'Documents', href: '/dashboard/documents' },
    { icon: BarChart2, label: 'Analytics', href: '/dashboard/analytics' },
    { icon: MessageSquare, label: 'AI Chat', href: '/dashboard/chat' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isSignedUp');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-screen bg-primary sidebar-transition ${
          isCollapsed ? 'w-16' : 'w-64'
        } z-30`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-primary-light flex items-center">
          <Bot className="h-8 w-8 text-accent flex-shrink-0" />
          {!isCollapsed && <span className="ml-2 text-xl font-semibold text-white">CreditAI</span>}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-4 top-20 bg-white border border-gray-200 text-gray-600 p-1.5 rounded-full shadow-lg hover:text-primary transition-colors"
          style={{ transform: 'translateX(50%)' }}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>

        {/* Navigation */}
        <div className="p-4">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = window.location.pathname === item.href;
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary-light text-accent' 
                      : 'text-gray-300 hover:bg-primary-light hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 text-gray-300 hover:bg-primary-light hover:text-white rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div 
        className={`content-transition ${
          isCollapsed ? 'ml-16' : 'ml-64'
        } flex-1`}
      >
        <DashboardHeader />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;