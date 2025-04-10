import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPagesModule } from 'src/app/pages/auth-pages/auth-pages.module';
import { ForgotPasswordPageComponent } from 'src/app/pages/auth-pages/forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from 'src/app/pages/auth-pages/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/pages/auth-pages/register-page/register-page.component';
import { VerifyAccountPageComponent } from 'src/app/pages/auth-pages/verify-account-page/verify-account-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent,
  },
  {
    path: 'verify-account/:token',
    component: VerifyAccountPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthPagesModule],
  exports: [RouterModule],
})
export class AuthLayoutRoutingModule {}
