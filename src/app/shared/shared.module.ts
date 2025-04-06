import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightOnRouteDirective } from './directives/highlight-on-route/highlight-on-route.directive';

@NgModule({
  declarations: [HighlightOnRouteDirective],
  imports: [CommonModule],
  exports: [HighlightOnRouteDirective],
})
export class SharedModule {}
