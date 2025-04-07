import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { RouterLink } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [ForgotPasswordComponent, TitleComponent, FormComponent],
  imports: [
    CommonModule,
    RouterLink,
    NgIconsModule.withIcons({
      heroArrowLeft,
    }),
  ],
  exports: [ForgotPasswordComponent],
})
export class ForgotPasswordModule {}
