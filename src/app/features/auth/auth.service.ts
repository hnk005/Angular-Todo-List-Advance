import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected readonly loginUrl = '/auth/login';
  protected readonly registerUrl = '/auth/register';
  protected readonly verifyAccountUrl = '/auth/verify-account';
  protected readonly forgotPassword = '/auth/forgot-password';

  constructor(protected readonly apiService: ApiService) {}

  getUrlLogin() {
    return this.loginUrl;
  }

  handleRegister(fullName: string, email: string, password: string) {
    const apiUrl = this.apiService.baseUrl + this.registerUrl;
    return this.apiService.post(apiUrl, {
      fullName,
      email,
      password,
    });
  }

  handleLogin(email: string, password: string) {
    const apiUrl = this.apiService.baseUrl + this.loginUrl;
    return this.apiService.post(apiUrl, {
      email,
      password,
    });
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
