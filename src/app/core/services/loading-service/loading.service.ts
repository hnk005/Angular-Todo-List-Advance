import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private spinnerService: NgxSpinnerService) {}
  show() {
    this.spinnerService.show();
  }

  hide() {
    this.spinnerService.hide();
  }
}
