import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

interface Alert {
  title: string;
  description: string;
  type: 'warning' | 'success' | 'info';
  time: string;
}

interface AlertsListProps {
  alerts: Alert[];
}

const AlertsList: React.FC<AlertsListProps> = ({ alerts }) => {
  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {alerts.map((alert, index) => (
        <div key={index} className="flex items-start space-x-3">
          {getAlertIcon(alert.type)}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">{alert.title}</p>
            <p className="text-sm text-gray-500">{alert.description}</p>
            <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertsList;