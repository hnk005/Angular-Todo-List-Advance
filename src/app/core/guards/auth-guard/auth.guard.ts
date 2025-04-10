import { Injectable } from '@angular/core';
import { CanActivate, GuardResult, MaybeAsync, Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    protected readonly router: Router,
    protected readonly authService: AuthService
  ) {}
  canActivate(): MaybeAsync<GuardResult> {
    const isLogin = this.authService.isLogin();
    if (!isLogin) {
      this.router.navigate(['/auth/login']);
    }
    return true;
  }
}
