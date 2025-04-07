import { NgModule } from '@angular/core';
import { ApiService } from './services/api-service/api.service';
import { HttpErrorService } from './interceptors/http-error/http-error.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorService, multi: true },
  ],
  exports: [],
})
export class CoreModule {}
