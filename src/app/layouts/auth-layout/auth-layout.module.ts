import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [SharedModule],
})
export class AuthLayoutModule {}
