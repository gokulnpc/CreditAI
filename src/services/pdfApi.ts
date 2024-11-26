import axios from "axios";
import FormData from "form-data";

const API_BASE_URL =
  "https://dev-api.synthlabs.ai/reformulation-agent/api/v0/pdfs";
const API_KEY = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});

export interface GenerateSchemaResponse {
  task_id: string;
}

export interface SchemaStatusResponse {
  status: string;
  result?: {
    schema: string;
    document_types: string[];
    stats: {
      processed_files: number;
      document_types: number;
    };
  };
  transformation_id: number;
}

export interface InvokeResponse {
  task_id: string;
}

export interface InvokeStatusResponse {
  status: string;
  task_id: string;
  result?: {
    checking_summary_model?: {
      checking_account_activity: {
        summary: Array<{
          instances: string;
          amount: string;
        }>;
        deposits_and_additions: Array<{
          date: string;
          description: string;
          amount: string;
        }>;
        checks_paid: Array<{
          check_no: string;
          description: string;
          date_paid: string;
          amount: string;
        }>;
      };
      daily_account_balance: Array<{
        date: string;
        amount: string;
      }>;
    };
  };
}

export const pdfApi = {
  async generateTaskId(files: File[]): Promise<GenerateSchemaResponse> {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    const response = await api.post("/generate-schema", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-api-key": API_KEY,
      },
      maxBodyLength: Infinity,
    });
    console.log(response.data);
    return response.data;
  },

  async getSchemaId(taskId: string): Promise<SchemaStatusResponse> {
    console.log("taskId", taskId);
    const response = await api.get(`/generate-schema/${taskId}`);
    console.log("getSchemaId: ", response.data);
    return response.data;
  },

  async invokeSchema(schemaId: number, file: File): Promise<InvokeResponse> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post(`/${schemaId}/invoke`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-api-key": API_KEY,
      },
      maxBodyLength: Infinity,
    });
    return response.data;
  },

  async getInvokeStatus(taskId: string): Promise<InvokeStatusResponse> {
    console.log("taskId", taskId);
    const response = await api.get(`/invoke/${taskId}`);
    return response.data;
  },
};
