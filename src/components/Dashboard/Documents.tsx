import React, { useState } from 'react';
import DataInput from '../Upload/DataInput';

const Documents = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
        <p className="text-gray-600">Upload and manage your financial documents</p>
      </div>

      {/* Data Input Section */}
      <DataInput />
    </div>
  );
};

export default Documents;