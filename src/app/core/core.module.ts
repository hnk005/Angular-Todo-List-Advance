import { NgModule } from '@angular/core';
import { ApiService } from './services/api-service/api.service';
import { HttpErrorInterceptor } from './interceptors/http-error/http-error.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggingInterceptor } from './interceptors/logging/logging.interceptor';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';
import { TokenService } from './services/token-service/token.service';
import { AuthGuard } from './guards/auth-guard/auth.guard';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ApiService,
    TokenService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
  ],
  exports: [HttpClientModule],
})
export class CoreModule {}
