import { Component } from '@angular/core';
import { RegisterModule } from 'src/app/features/auth/register/register.module';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegisterModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {}
