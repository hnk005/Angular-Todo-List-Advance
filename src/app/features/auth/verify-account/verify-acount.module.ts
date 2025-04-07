import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyAccountComponent } from './verify-account.component';
import { VerifyAccountService } from './verify-account.service';

@NgModule({
  declarations: [VerifyAccountComponent],
  imports: [CommonModule],
  providers: [VerifyAccountService],
  exports: [VerifyAccountComponent],
})
export class VerifyAcountModule {}
