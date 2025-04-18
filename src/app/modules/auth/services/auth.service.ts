import { Injectable } from '@angular/core';
import { AuthEndpoints } from '../../../configs/api-endpoints.config';
import { ApiService } from '../../../core/services/api-service/api.service';
import { LoginRequest, LoginResponse } from '../models/login-model';
import { RegisterRequest } from '../models/register-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly loginUrl = AuthEndpoints.login;
  readonly registerUrl = AuthEndpoints.register;

  constructor(private apiService: ApiService) {}

  handleLogin(data: LoginRequest) {
    return this.apiService.post<LoginResponse>(this.loginUrl, data);
  }

  handleRegister(data: RegisterRequest) {
    return this.apiService.post(this.registerUrl, data);
  }
}
