import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service/api.service';
import { TokenService } from 'src/app/core/services/token-service/token.service';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from 'src/app/models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected readonly loginUrl = '/login';
  protected readonly registerUrl = '/register';
  protected readonly verifyAccountUrl = '/verify-account';
  protected readonly forgotPassword = '/forgot-password';

  constructor(
    protected readonly apiService: ApiService,
    protected readonly tokenService: TokenService
  ) {}

  getUrlLogin(): string {
    return this.loginUrl;
  }

  isLogin(): boolean {
    return this.tokenService.getToken() ? true : false;
  }

  handleRegister(data: RegisterRequest) {
    const apiUrl = this.apiService.baseUrl + this.registerUrl;
    return this.apiService.post(apiUrl, data);
  }

  handleLogin(data: LoginRequest) {
    const apiUrl = this.apiService.baseUrl + this.loginUrl;
    return this.apiService.post<LoginResponse>(apiUrl, data);
  }

  handleForgotPassword(email: string) {
    const apiUrl = this.apiService.baseUrl + this.forgotPassword;
    return this.apiService.post(apiUrl, { email });
  }

  handleVerifyAccount(token: string) {
    const apiUrl = this.apiService.baseUrl + this.verifyAccountUrl;
    return this.apiService.put(apiUrl, { token });
  }
}
