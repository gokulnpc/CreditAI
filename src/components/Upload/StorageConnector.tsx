import React from "react";
import { CloudIcon } from "lucide-react";

interface StorageProvider {
  name: string;
  icon: string;
  description: string;
}

const StorageConnector = () => {
  const providers: StorageProvider[] = [
    {
      name: "SharePoint",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg",
      description: "Connect to your SharePoint documents",
    },
    {
      name: "Google Drive",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
      description: "Access files from Google Drive",
    },
    {
      name: "Dropbox",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg",
      description: "Import from your Dropbox",
    },
    {
      name: "Box",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/Box%2C_Inc._logo.svg",
      description: "Connect with Box storage",
    },
  ];

  const handleConnect = (provider: string) => {
    // Implement OAuth flow for each provider
    console.log(`Connecting to ${provider}...`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {providers.map((provider) => (
        <div
          key={provider.name}
          className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
        >
          <img
            src={provider.icon}
            alt={provider.name}
            className="w-10 h-10 object-contain"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-sm font-medium text-gray-900">
              {provider.name}
            </h3>
            <p className="text-sm text-gray-500">{provider.description}</p>
          </div>
          <button
            onClick={() => handleConnect(provider.name)}
            className="ml-4 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
          >
            Connect
          </button>
        </div>
      ))}
    </div>
  );
};

export default StorageConnector;
