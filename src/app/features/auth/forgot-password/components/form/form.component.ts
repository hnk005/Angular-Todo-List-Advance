import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormLimits } from 'src/app/constants/form-limits';
import { ValidationMessages } from 'src/app/constants/validation-messages';
import { AuthService } from '../../../auth.service';
import { finalize, Subject, takeUntil, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-forgot-password',
  standalone: false,
  templateUrl: './form.component.html',
})
export class FormComponent implements OnDestroy {
  protected readonly formLimits;
  protected readonly validationMessages;
  protected readonly formForgotPassword;
  protected readonly destroy$;

  constructor(
    protected readonly authService: AuthService,
    protected readonly router: Router
  ) {
    this.formLimits = FormLimits;
    this.validationMessages = ValidationMessages;
    this.formForgotPassword = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
    });
    this.destroy$ = new Subject<void>();
  }

  handleSubmit() {
    const { email } = this.formForgotPassword.value;

    if (!email) {
      return;
    }

    if (this.formForgotPassword.invalid) {
      return;
    }

    this.authService
      .handleForgotPassword(email)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.router.navigate([this.authService.getUrlLogin()]);
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
