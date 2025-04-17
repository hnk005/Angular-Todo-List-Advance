import { Injectable } from '@angular/core';
import { AuthEndpoints } from '../../../configs/api-endpoints.config';
import { ApiService } from '../../../core/services/api-service/api.service';
import { LoginRequest, LoginResponse } from '../models/login-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loginUrl = AuthEndpoints.login;

  constructor(private apiService: ApiService) {}

  handleLogin(data: LoginRequest) {
    return this.apiService.post<LoginResponse>(this.loginUrl, data);
  }
}
