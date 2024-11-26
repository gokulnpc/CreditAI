interface StoredDocument {
  id: string;
  name: string;
  status: "completed" | "failed";
  type: string;
  size?: string;
  date: string;
  hash?: string;
  error?: string;
  taskId?: string;
  result?: any;
  fileData?: string;
  sections?: string[];
  includeCharts?: boolean;
  description?: string;
}

const STORAGE_KEY = "creditai_processed_documents";
const EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const storageService = {
  async saveProcessedDocuments(documents: StoredDocument[]) {
    try {
      const timestamp = Date.now();
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          documents,
          timestamp,
        })
      );
    } catch (error) {
      console.error("Error saving documents to storage:", error);
    }
  },

  getProcessedDocuments(): StoredDocument[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];

      const { documents, timestamp } = JSON.parse(data);

      // Check if data has expired
      if (Date.now() - timestamp > EXPIRY_TIME) {
        localStorage.removeItem(STORAGE_KEY);
        return [];
      }

      return documents;
    } catch (error) {
      console.error("Error reading documents from storage:", error);
      return [];
    }
  },

  async storeDocument(document: StoredDocument, file?: File): Promise<StoredDocument> {
    try {
      const existingDocs = this.getProcessedDocuments();
      const updatedDocs = [...existingDocs, document];
      await this.saveProcessedDocuments(updatedDocs);
      return document;
    } catch (error) {
      console.error("Error storing document:", error);
      throw error;
    }
  },

  async getStoredFile(document: StoredDocument): Promise<File | null> {
    if (!document.fileData) return null;
    try {
      return new File([document.fileData], document.name);
    } catch (error) {
      console.error("Error retrieving stored file:", error);
      return null;
    }
  },

  clearProcessedDocuments() {
    localStorage.removeItem(STORAGE_KEY);
  },
};