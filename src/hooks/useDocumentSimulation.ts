import { useState } from "react";
import { QueuedDocument } from "../types/document";
import { storageService } from "../services/storageService";

const SIMULATION_STEPS = [
  "Analyzing document structure...",
  "Extracting content...",
  "Processing financial data...",
  "Generating insights...",
  "Finalizing analysis..."
];

export const useDocumentSimulation = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState("");
  const [error, setError] = useState<string | null>(null);

  const simulateProcessing = async (
    selectedDocs: QueuedDocument[],
    updateDocumentStatus: (id: string, updates: Partial<QueuedDocument>) => void
  ) => {
    try {
      setIsProcessing(true);
      setError(null);

      // Simulate processing steps
      for (const step of SIMULATION_STEPS) {
        setProcessingStep(step);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      // Process each document
      for (const doc of selectedDocs) {
        // Simulate document-specific processing
        setProcessingStep(`Analyzing ${doc.name}...`);
        await new Promise(resolve => setTimeout(resolve, 800));

        // Generate mock analysis result
        const mockResult = {
          summary: {
            totalPages: Math.floor(Math.random() * 20) + 1,
            documentType: "Financial Statement",
            confidence: Math.floor(Math.random() * 20) + 80,
          },
          analysis: {
            keyMetrics: {
              revenue: `$${(Math.random() * 1000000).toFixed(2)}`,
              profit: `$${(Math.random() * 100000).toFixed(2)}`,
              growth: `${(Math.random() * 30).toFixed(1)}%`
            }
          }
        };

        // Generate mock transaction hash
        const mockHash = Array.from({ length: 64 }, () => 
          Math.floor(Math.random() * 16).toString(16)
        ).join('');

        const processedDoc = {
          ...doc,
          status: "completed" as const,
          hash: mockHash,
          result: mockResult
        };

        // Store the processed document
        await storageService.storeDocument(processedDoc, doc.file);

        updateDocumentStatus(doc.id, {
          status: "completed",
          hash: mockHash,
          result: mockResult
        });
      }

      localStorage.setItem("documentsUploaded", "true");
      return true;
    } catch (err) {
      console.error("Error processing documents:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      return false;
    } finally {
      setIsProcessing(false);
      setProcessingStep("");
    }
  };

  return {
    isProcessing,
    processingStep,
    error,
    processDocuments: simulateProcessing
  };
};