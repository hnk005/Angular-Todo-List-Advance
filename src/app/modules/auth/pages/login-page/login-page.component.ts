import { Component } from '@angular/core';
import { AuthModule } from '../../auth.module';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [AuthModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {}
