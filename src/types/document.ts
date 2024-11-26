export interface QueuedDocument {
  id: string;
  name: string;
  status: "pending" | "processing" | "completed" | "failed";
  type: string;
  size: string;
  date: string;
  hash?: string;
  error?: string;
  file: File;
  result?: any;
  taskId?: string;
}

export interface StoredDocument extends Omit<QueuedDocument, "file"> {
  fileData?: string; // Base64 encoded file data
}
