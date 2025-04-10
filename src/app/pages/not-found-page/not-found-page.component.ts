import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent {}
