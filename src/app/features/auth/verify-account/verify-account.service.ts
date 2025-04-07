import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VerifyAccountService {
  constructor() {}

  handleVerifyAccount(token: string): boolean {
    return true; // success
    return false; // fail
  }
}
