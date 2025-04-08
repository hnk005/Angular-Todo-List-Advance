import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterLink } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { TitleComponent } from './components/title/title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { NgIconsModule } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [LoginComponent, FormComponent, TitleComponent],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    NgIconsModule.withIcons({
      heroEye,
      heroEyeSlash,
    }),
  ],
  providers: [LoginService],
  exports: [LoginComponent],
})
export class LoginModule {}
