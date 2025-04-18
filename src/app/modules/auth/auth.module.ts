import { NgModule } from '@angular/core';
import { AuthLoginFormComponent } from './components/auth-login-form/auth-login-form.component';
import { AuthService } from './services/auth.service';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroArrowLeft,
  heroExclamationCircle,
  heroEye,
  heroEyeSlash,
} from '@ng-icons/heroicons/outline';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthLogoComponent } from './components/auth-logo/auth-logo.component';
import { AuthRegisterFormComponent } from './components/auth-register-form/auth-register-form.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AuthLoginFormComponent,
    AuthLogoComponent,
    AuthRegisterFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    NgIconsModule.withIcons({
      heroEye,
      heroEyeSlash,
      heroArrowLeft,
      heroExclamationCircle,
    }),
  ],
  providers: [AuthService],
  exports: [
    AuthLoginFormComponent,
    AuthLogoComponent,
    AuthRegisterFormComponent,
  ],
})
export class AuthModule {}
