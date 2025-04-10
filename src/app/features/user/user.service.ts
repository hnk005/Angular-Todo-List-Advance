import { Injectable } from '@angular/core';
import { TokenService } from '../../core/services/token-service/token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  protected readonly user;
  constructor(protected readonly tokenService: TokenService) {
    this.user = {
      name: 'Nam Kha',
    };
  }

  getUser() {
    return this.user;
  }
}
