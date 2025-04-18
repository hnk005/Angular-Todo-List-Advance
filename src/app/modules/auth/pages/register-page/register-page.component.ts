import { Component } from '@angular/core';
import { AuthModule } from '../../auth.module';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [AuthModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {}
