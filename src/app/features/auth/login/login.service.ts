import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly baseUrl = '/auth/login';
  constructor(private apiService: ApiService) {}

  handleLogin(email: string, password: string) {
    return this.apiService.post(this.apiService.baseUrl + this.baseUrl, {
      email,
      password,
    });
  }
}
