import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading-interceptor/loading.interceptor';
import { ApiService } from './services/api-service/api.service';
import { LoggingInterceptor } from './interceptors/logging-interceptor/logging.interceptor';
import { TokenService } from './services/token-service/token.service';
import { AuthInterceptor } from './interceptors/auth-interceptor/auth.interceptor';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [
    ApiService,
    TokenService,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
