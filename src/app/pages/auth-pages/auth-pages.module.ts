import { NgModule } from '@angular/core';
import { AuthModule } from 'src/app/features/auth/auth.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { VerifyAccountPageComponent } from './verify-account-page/verify-account-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    ForgotPasswordPageComponent,
    VerifyAccountPageComponent,
  ],
  imports: [AuthModule, SharedModule],
})
export class AuthPagesModule {}
