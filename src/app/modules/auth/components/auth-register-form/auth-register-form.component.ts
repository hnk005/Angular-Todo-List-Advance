import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  Validation,
  ValidationMessages,
} from '../../../../configs/validation.config';
import { forbiddenTextValidator } from '../../../../shared/directives/forbidden-text/forbidden-text.directive';

@Component({
  selector: 'app-auth-register-form',
  standalone: false,
  templateUrl: './auth-register-form.component.html',
})
export class AuthRegisterFormComponent {
  readonly validation;
  readonly validationMessages;
  readonly formRegister;
  readonly showPassword;
  readonly showConfirmPassword;
  constructor(private authSevice: AuthService, private router: Router) {
    this.validation = Validation;
    this.validationMessages = ValidationMessages;
    this.formRegister = new FormGroup({
      fullName: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          forbiddenTextValidator(this.validation.fullName.regex),
        ],
      }),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(this.validation.email.limit.max),
        ],
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(this.validation.password.limit.min),
          Validators.maxLength(this.validation.password.limit.max),
        ],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required],
      }),
    });
    this.showPassword = signal(false);
    this.showConfirmPassword = signal(false);
  }

  handleSubmit() {
    const { fullName, email, password, confirmPassword } =
      this.formRegister.value;

    if (!fullName || !email || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    if (this.formRegister.invalid) {
      return;
    }

    this.authSevice
      .handleRegister({
        fullName: fullName.trim(),
        username: email.trim(),
        password: password.trim(),
      })
      .subscribe(() => {
        this.router.navigate(['/auth/login']);
      });
  }

  handleShowPassword() {
    this.showPassword.set(!this.showPassword());
  }
  handleShowConfirmPassword() {
    this.showConfirmPassword.set(!this.showConfirmPassword());
  }
}
