import { Component } from '@angular/core';
import { LoginModule } from 'src/app/features/login/login.module';

@Component({
  selector: 'app-login-page',
  imports: [LoginModule],
  standalone: true,
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {}
