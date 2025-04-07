import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorService implements HttpInterceptor {
  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Token hết hạn hoặc chưa đăng nhập
          this.router.navigate(['/login']);
          this.toastr.error('Token hết hạn hoặc chưa đăng nhập.', 'Lỗi 401');
        } else if (error.status === 403) {
          this.toastr.error('Bạn không có quyền truy cập!');
        } else if (error.status === 500) {
          this.toastr.error('Lỗi server! Vui lòng thử lại sau.');
        } else if (error.status === 0) {
          this.toastr.error('Không thể kết nối server 😢');
        }

        // Có thể log ra console hoặc gửi về server để log
        console.error('Lỗi xử lý tập trung:', error);

        return throwError(() => error);
      })
    );
  }
}
