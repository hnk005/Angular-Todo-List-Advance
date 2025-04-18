import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, Subject, takeUntil, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  Validation,
  ValidationMessages,
} from '../../../../configs/validation.config';

@Component({
  selector: 'app-auth-login-form',
  standalone: false,
  templateUrl: './auth-login-form.component.html',
})
export class AuthLoginFormComponent {
  readonly validation;
  readonly validationMessages;
  readonly formLogin;
  readonly showPassword;
  readonly destroy$;

  @ViewChild('passwordInput') passwordInputRef!: ElementRef;

  constructor(private authSerivce: AuthService) {
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
        // const { id } = data.data;
        // this.tokenService.saveToken(id.toString());
        // this.router.navigate(['/']);
      });
  }

  handleShowPassword() {
    this.showPassword.set(!this.showPassword());
  }
}
