import { Injectable } from '@angular/core';
import { TokenService } from '../token-service/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private tokenService: TokenService) {}

  isUser() {
    const token = this.tokenService.getToken();
    return token ? true : false;
  }
}
