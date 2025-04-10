import { Component, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-verify-account',
  standalone: false,
  templateUrl: './verify-account.component.html',
})
export class VerifyAccountComponent implements OnDestroy {
  protected readonly status;
  protected readonly destroy$;
  protected readonly idTimeOut;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly authService: AuthService,
    protected readonly router: Router
  ) {
    const verifyToken = this.route.snapshot.paramMap.get('token');
    this.status = signal<boolean>(false);
    this.destroy$ = new Subject<void>();
    this.idTimeOut = signal<ReturnType<typeof setTimeout> | null>(null);

    if (!verifyToken) {
      return;
    }

    this.authService
      .handleVerifyAccount(verifyToken)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          const id = setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
          this.idTimeOut.set(id);
        })
      )
      .subscribe((data) => {
        const {} = data.data;
        this.status.set(true);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    const id = this.idTimeOut();
    if (id) {
      clearTimeout(id);
    }
  }
}
