export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatResponse {
  answer: string;
  success: boolean;
  error?: string;
}

export interface ApiRequest {
  question: string;
} 