import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterLink } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [LoginComponent, FormComponent, TitleComponent],
  imports: [CommonModule, RouterLink],
  exports: [LoginComponent],
})
export class LoginModule {}
