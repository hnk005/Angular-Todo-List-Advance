// src/app/core/services/logger.service.ts
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(private toastr: ToastrService) {}

  success(message: string, title: string = 'Success') {
    this.toastr.success(message, title, {
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
    });
  }

  error(message: string, title: string = 'Error') {
    this.toastr.error(message, title, {
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  warning(message: string, title: string = 'Warn') {
    this.toastr.warning(message, title, {
      positionClass: 'toast-bottom-right',
      timeOut: 4000,
    });
  }

  info(message: string, title: string = 'Info') {
    this.toastr.info(message, title, {
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
    });
  }

  // Optional: dev
  logToConsole(msg: any) {
    console.log('[LOGGER]', msg);
  }
}
