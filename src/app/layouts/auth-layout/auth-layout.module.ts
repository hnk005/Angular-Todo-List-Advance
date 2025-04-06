import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, RouterModule, RouterLink],
})
export class AuthLayoutModule {}
