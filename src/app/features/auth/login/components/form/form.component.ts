import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
})
export class FormComponent {
  constructor(private loginService: LoginService) {}

  protected formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleSubmit() {
    const { email, password } = this.formLogin.value;
    if (email && password) {
      this.loginService.handleLogin(email, password).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
