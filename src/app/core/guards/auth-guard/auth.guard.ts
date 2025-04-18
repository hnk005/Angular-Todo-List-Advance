import { Injectable } from '@angular/core';
import { CanActivate, GuardResult, MaybeAsync, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(): MaybeAsync<GuardResult> {
    const isLogin = this.authService.isUser();
    if (!isLogin) {
      this.router.navigate(['/auth/login']);
    }
    return true;
  }
}
