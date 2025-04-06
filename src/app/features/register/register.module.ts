import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormComponent } from './components/form/form.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [RegisterComponent, FormComponent, TitleComponent],
  imports: [CommonModule, RouterLink],
  exports: [RegisterComponent],
})
export class RegisterModule {}
