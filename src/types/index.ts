
// User types
export interface User {
  id: string;
  username: string;
  email: string;
  role: "student" | "admin";
}

// Authentication types
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}

// Chat types
export interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

// Document types
export interface Document {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  fileSize: string;
  fileType: string;
}
