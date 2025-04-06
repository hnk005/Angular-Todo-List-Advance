import { Component } from '@angular/core';
import { ForgotPasswordModule } from 'src/app/features/forgot-password/forgot-password.module';

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [ForgotPasswordModule],
  templateUrl: './forgot-password-page.component.html',
})
export class ForgotPasswordPageComponent {}
