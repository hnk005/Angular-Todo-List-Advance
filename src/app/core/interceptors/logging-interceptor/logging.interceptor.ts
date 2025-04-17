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
import { LoggerService } from '../../services/logger-service/logger.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private loggerService: LoggerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.loggerService.success(
            event?.body?.message ?? event?.statusText ?? 'No message'
          );
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.loggerService.error(
          error?.error?.message ??
            error?.statusText ??
            error?.message ??
            'No message'
        );
        return throwError(() => error);
      })
    );
  }
}
