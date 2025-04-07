import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyAccountService } from './verify-account.service';

@Component({
  selector: 'app-verify-account',
  standalone: false,
  templateUrl: './verify-account.component.html',
})
export class VerifyAccountComponent {
  status: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private verifySevice: VerifyAccountService
  ) {
    const verifyToken = this.route.snapshot.paramMap.get('token');
    if (verifyToken) {
      this.status = this.verifySevice.handleVerifyAccount(verifyToken);

      setTimeout(() => {
        if (this.status) {
          this.router.navigate(['/auth/login']);
          return;
        }
        this.router.navigate(['/']);
      }, 2000);
    }
  }
}
