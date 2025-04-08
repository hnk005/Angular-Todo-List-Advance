import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.toastr.success(
            event.body.message ?? event.statusText ?? 'No messages'
          );
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.toastr.error(
          error.error.message ?? error.message ?? 'No messages'
        );
        return throwError(() => error);
      })
    );
  }
}
