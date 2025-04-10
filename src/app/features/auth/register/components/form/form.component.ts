import {
  Component,
  signal,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../../auth.service';
import { ValidationMessages } from 'src/app/constants/validation-messages';
import {
  forbiddenTextValidator,
} from 'src/app/shared/directives/forbidden-text/forbidden-text.directive';
import { RegexPatterns } from 'src/app/constants/regex-patterns';
import { FormLimits } from 'src/app/constants/form-limits';

@Component({
  selector: 'app-form-register',
  standalone: false,
  templateUrl: './form.component.html',
})
export class FormComponent {
  protected readonly validationMessages;
  protected readonly regexPatterns;
  protected readonly formLimits;
  protected readonly formRegister;
  protected readonly showPassword;
  protected readonly showConfirmPassword;
  protected readonly destroy$;

  constructor(protected readonly authSevice: AuthService) {
    this.validationMessages = ValidationMessages;
    this.regexPatterns = RegexPatterns;
    this.formLimits = FormLimits;
    this.formRegister = new FormGroup({
      fullName: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          forbiddenTextValidator(this.regexPatterns.fullName),
        ],
      }),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(this.formLimits.email.maxLength),
        ],
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(this.formLimits.password.minLength),
          Validators.maxLength(this.formLimits.password.maxLength),
        ],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required],
      }),
    });
    this.showPassword = signal(false);
    this.showConfirmPassword = signal(false);
    this.destroy$ = new Subject<void>();
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
      .handleRegister(fullName, email, password)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log(data);
      });
  }

  handleShowPassword() {
    this.showPassword.set(!this.showPassword());
  }
  handleShowConfirmPassword() {
    this.showConfirmPassword.set(!this.showConfirmPassword());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
