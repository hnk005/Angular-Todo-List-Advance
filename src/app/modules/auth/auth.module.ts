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

@NgModule({
  declarations: [AuthLoginFormComponent, AuthLogoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({
      heroEye,
      heroEyeSlash,
      heroArrowLeft,
      heroExclamationCircle,
    }),
  ],
  providers: [AuthService],
  exports: [AuthLoginFormComponent, AuthLogoComponent],
})
export class AuthModule {}
