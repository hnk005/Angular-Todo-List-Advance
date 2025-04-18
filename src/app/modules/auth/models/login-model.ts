export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  statusCode: number;
  error: any | null;
  message: string;
  data: any;
}
