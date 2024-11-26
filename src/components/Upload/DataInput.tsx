import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import DocumentUpload from "./DocumentUpload";
import StorageConnector from "./StorageConnector";
import DocumentQueue from "./DocumentQueue";
import ProcessingOverlay from "./ProcessingOverlay";
import { useDocumentSimulation } from "../../hooks/useDocumentSimulation";
import { useDocumentQueue } from "../../hooks/useDocumentQueue";
import { storageService } from "../../services/storageService";

const DataInput = () => {
  const navigate = useNavigate();
  const {
    queuedDocuments,
    setQueuedDocuments,
    selectedDocuments,
    addDocuments,
    updateDocument,
    toggleDocument,
    toggleAllDocuments
  } = useDocumentQueue();

  const { isProcessing, processingStep, error, processDocuments } = useDocumentSimulation();

  useEffect(() => {
    const loadStoredDocuments = async () => {
      const storedDocs = storageService.getProcessedDocuments();
      const loadedDocs = await Promise.all(
        storedDocs.map(async (doc) => {
          const file = await storageService.getStoredFile(doc);
          return {
            ...doc,
            file: file || new File([], doc.name),
          };
        })
      );
      setQueuedDocuments(loadedDocs);
    };

    loadStoredDocuments();
  }, [setQueuedDocuments]);

  const handleProcessSelected = async () => {
    const selectedDocs = queuedDocuments.filter((doc) =>
      selectedDocuments.has(doc.id)
    );

    const success = await processDocuments(selectedDocs, updateDocument);
    
    if (success) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="upload">
        <TabsList>
          <TabsTrigger value="upload">Upload Files</TabsTrigger>
          <TabsTrigger value="connect">Connect Storage</TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <DocumentUpload onFilesAdded={addDocuments} />
        </TabsContent>

        <TabsContent value="connect">
          <StorageConnector />
        </TabsContent>
      </Tabs>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      {queuedDocuments.length > 0 && (
        <DocumentQueue
          documents={queuedDocuments}
          selectedDocuments={selectedDocuments}
          onSelectDocument={toggleDocument}
          onSelectAll={toggleAllDocuments}
          onProcessSelected={handleProcessSelected}
        />
      )}

      {isProcessing && <ProcessingOverlay currentStep={processingStep} />}
    </div>
  );
};

export default DataInput;