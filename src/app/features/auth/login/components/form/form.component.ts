import {
  Component,
  ElementRef,
  OnDestroy,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, Subject, takeUntil, throwError } from 'rxjs';
import { AuthService } from '../../../auth.service';
import { ValidationMessages } from 'src/app/constants/validation-messages';
import { FormLimits } from 'src/app/constants/form-limits';

@Component({
  selector: 'app-form-login',
  standalone: false,
  templateUrl: './form.component.html',
})
export class FormComponent implements OnDestroy {
  protected readonly validationMessages;
  protected readonly formLimits;
  protected readonly formLogin;
  protected readonly showPassword;
  protected readonly destroy$;

  @ViewChild('passwordInput') passwordInputRef!: ElementRef;
  constructor(protected readonly authSerivce: AuthService) {
    this.validationMessages = ValidationMessages;
    this.formLimits = FormLimits;
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
      .handleLogin(email.trim(), password.trim())
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.formLogin.get('password')?.reset();
          this.passwordInputRef?.nativeElement?.focus();
          return throwError(() => error);
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  handleShowPassword() {
    this.showPassword.set(!this.showPassword());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
