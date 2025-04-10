import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly loginUrl = '/auth/login';
  readonly registerUrl = '/auth/register';
  readonly verifyAccountUrl = '/auth/verify-account';
  constructor(private apiService: ApiService) {}

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

  handleVerifyAccount(email: string, token: string) {
    const apiUrl = this.apiService.baseUrl + this.verifyAccountUrl;
    return this.apiService.put(apiUrl, { email, token });
  }
}
