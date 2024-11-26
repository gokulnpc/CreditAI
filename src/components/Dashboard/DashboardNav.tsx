import React from 'react';
import { Bot, LogOut } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface DashboardNavProps {
  navItems: NavItem[];
}

const DashboardNav: React.FC<DashboardNavProps> = ({ navItems }) => {
  return (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <Bot className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-semibold">CreditAI</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 group"
                >
                  <Icon className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 group">
          <LogOut className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardNav;