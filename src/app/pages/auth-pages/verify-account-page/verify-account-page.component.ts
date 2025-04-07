import { Component } from '@angular/core';
import { VerifyAcountModule } from 'src/app/features/auth/verify-account/verify-acount.module';

@Component({
  selector: 'app-verify-account-page',
  standalone: true,
  imports: [VerifyAcountModule],
  templateUrl: './verify-account-page.component.html',
})
export class VerifyAccountPageComponent {}
