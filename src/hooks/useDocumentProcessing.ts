import { useState } from "react";
import { QueuedDocument } from "../types/document";
import { pdfApi } from "../services/pdfApi";
import { storageService } from "../services/storageService";

export const useDocumentProcessing = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState("");
  const [error, setError] = useState<string | null>(null);

  const pollStatus = async (
    id: string,
    checkFn: () => Promise<any>,
    maxAttempts = 30,
    interval = 2000
  ) => {
    let attempts = 0;

    while (attempts < maxAttempts) {
      const response = await checkFn();

      if (response.status === "COMPLETED") {
        return response;
      } else if (response.status === "FAILED") {
        throw new Error(response.error || "Processing failed");
      }

      await new Promise((resolve) => setTimeout(resolve, interval));
      attempts++;
    }

    throw new Error("Operation timed out");
  };

  const processDocuments = async (
    selectedDocs: QueuedDocument[],
    updateDocumentStatus: (id: string, updates: Partial<QueuedDocument>) => void
  ) => {
    try {
      setIsProcessing(true);
      setError(null);

      // Step 1: Generate Schema
      setProcessingStep("Analyzing document structure...");
      const files = selectedDocs.map((doc) => doc.file);
      const schemaResponse = await pdfApi.generateTaskId(files);

      // Step 2: Get Schema ID
      setProcessingStep("Processing document schema...");
      const taskIdResponse = await pollStatus(schemaResponse.task_id, () =>
        pdfApi.getSchemaId(schemaResponse.task_id)
      );

      const schemaId = taskIdResponse.transformation_id;

      // Step 3: Process each document
      let successCount = 0;
      for (const doc of selectedDocs) {
        try {
          setProcessingStep(`Analyzing ${doc.name}...`);
          updateDocumentStatus(doc.id, { status: "processing" });

          const invokeResponse = await pdfApi.invokeSchema(schemaId, doc.file);
          updateDocumentStatus(doc.id, { taskId: invokeResponse.task_id });

          const result = await pollStatus(invokeResponse.task_id, () =>
            pdfApi.getInvokeStatus(invokeResponse.task_id)
          );

          const processedDoc = {
            ...doc,
            status: "completed" as const,
            hash: result.task_id,
            result: result.result,
          };

          // Store the processed document with its file
          await storageService.storeDocument(processedDoc, doc.file);

          updateDocumentStatus(doc.id, {
            status: "completed",
            hash: result.task_id,
            result: result.result,
          });

          successCount++;
        } catch (err) {
          updateDocumentStatus(doc.id, {
            status: "failed",
            error: err instanceof Error ? err.message : "Processing failed",
          });
        }
      }

      if (successCount === selectedDocs.length) {
        localStorage.setItem("documentsUploaded", "true");
        return true;
      }

      return false;
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
    processDocuments,
  };
};