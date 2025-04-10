import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { AuthService } from './auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  heroArrowLeft,
  heroExclamationCircle,
  heroEye,
  heroEyeSlash,
} from '@ng-icons/heroicons/outline';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormComponent as FormLoginComponent } from './login/components/form/form.component';
import { TitleComponent as TitleLoginComponent } from './login/components/title/title.component';
import { FormComponent as FormRegisterComponent } from './register/components/form/form.component';
import { TitleComponent as TitleRegisterComponent } from './register/components/title/title.component';
import { FormComponent as FormForgotComponent } from './forgot-password/components/form/form.component';
import { TitleComponent as TitleForgotComponent } from './forgot-password/components/title/title.component';

@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    TitleLoginComponent,
    RegisterComponent,
    FormRegisterComponent,
    TitleRegisterComponent,
    VerifyAccountComponent,
    ForgotPasswordComponent,
    FormForgotComponent,
    TitleForgotComponent,
  ],
  imports: [
    NgIconsModule.withIcons({
      heroEye,
      heroEyeSlash,
      heroArrowLeft,
      heroExclamationCircle,
    }),
    SharedModule,
  ],
  providers: [AuthService],
  exports: [
    LoginComponent,
    RegisterComponent,
    VerifyAccountComponent,
    ForgotPasswordComponent,
  ],
})
export class AuthModule {}
