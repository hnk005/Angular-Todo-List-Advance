import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ForbiddenTextDirective } from './directives/forbidden-text/forbidden-text.directive';

@NgModule({
  declarations: [ForbiddenTextDirective],
  imports: [CommonModule, RouterLink, RouterModule, ReactiveFormsModule],
  providers: [ForbiddenTextDirective],
  exports: [
    CommonModule,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    ForbiddenTextDirective,
  ],
})
export class SharedModule {}
