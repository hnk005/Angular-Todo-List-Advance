import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [SharedModule, AuthLayoutRoutingModule],
})
export class AuthLayoutModule {}
