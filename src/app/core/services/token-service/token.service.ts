import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  protected token;
  constructor() {
    this.token = localStorage.getItem('token');
  }

  getToken() {
    return this.token;
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this.setToken();
  }

  setToken() {
    this.token = localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
