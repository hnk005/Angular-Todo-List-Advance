import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly registerUrl = '/auth/register';
  constructor(private apiService: ApiService) {}

  handleRegister(fullName: string, email: string, password: string) {
    const apiUrl = this.apiService.baseUrl + this.registerUrl;
    return this.apiService.post(apiUrl, {
      fullName,
      email,
      password,
    });
  }
}
