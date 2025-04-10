export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  fullName: string;
  email: string;
}

export interface LoginResponse {
  statusCode: number;
  error: any | null;
  message: string;
  data: UserResponse;
}
