import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-verify-account',
  standalone: false,
  templateUrl: './verify-account.component.html',
})
export class VerifyAccountComponent {
  status: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    const emailVerify = this.route.snapshot.paramMap.get('email');
    const verifyToken = this.route.snapshot.paramMap.get('token');
    if (verifyToken && emailVerify) {
      this.authService
        .handleVerifyAccount(emailVerify, verifyToken)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
