import React from 'react';

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

interface TabsListProps {
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

const TabsContext = React.createContext<{
  value: string;
  onChange: (value: string) => void;
}>({
  value: '',
  onChange: () => {}
});

export const Tabs: React.FC<TabsProps> = ({ defaultValue, children }) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, onChange: setValue }}>
      <div className="space-y-4">{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return (
    <div className="flex space-x-1 border-b border-gray-200">
      {children}
    </div>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children }) => {
  const { value: selectedValue, onChange } = React.useContext(TabsContext);
  
  return (
    <button
      className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
        selectedValue === value
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={() => onChange(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => {
  const { value: selectedValue } = React.useContext(TabsContext);
  
  if (selectedValue !== value) return null;
  
  return (
    <div className="transition-opacity duration-200 ease-in-out">
      {children}
    </div>
  );
};