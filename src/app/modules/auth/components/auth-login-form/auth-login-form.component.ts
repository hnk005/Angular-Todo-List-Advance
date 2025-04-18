import {
  Component,
  ElementRef,
  OnDestroy,
  signal,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, Subject, takeUntil, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  Validation,
  ValidationMessages,
} from '../../../../configs/validation.config';
import { TokenService } from '../../../../core/services/token-service/token.service';

@Component({
  selector: 'app-auth-login-form',
  standalone: false,
  templateUrl: './auth-login-form.component.html',
})
export class AuthLoginFormComponent implements OnDestroy {
  readonly validation;
  readonly validationMessages;
  readonly formLogin;
  readonly showPassword;
  readonly destroy$;

  @ViewChild('passwordInput') passwordInputRef!: ElementRef;

  constructor(
    private authSerivce: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.validation = Validation;
    this.validationMessages = ValidationMessages;
    this.formLogin = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });

    this.showPassword = signal(false);

    this.destroy$ = new Subject<void>();
  }

  handleSubmit() {
    const { email, password } = this.formLogin.value;

    if (!email || !password) {
      return;
    }

    if (this.formLogin.invalid) {
      return;
    }

    this.authSerivce
      .handleLogin({ username: email.trim(), password: password.trim() })
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.formLogin.get('password')?.reset();
          this.passwordInputRef?.nativeElement?.focus();
          return throwError(() => error);
        })
      )
      .subscribe((data) => {
        const { accessToken } = data.data;
        this.tokenService.saveToken(accessToken);
        this.router.navigate(['/']);
      });
  }

  handleShowPassword() {
    this.showPassword.set(!this.showPassword());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
