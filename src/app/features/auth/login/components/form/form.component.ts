import { Component, OnDestroy, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
})
export class FormComponent implements OnDestroy {
  constructor(private loginService: LoginService) {}

  protected formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  readonly showPassword: WritableSignal<boolean> = signal(false);

  handleSubmit() {
    const { email, password } = this.formLogin.value;
    if (email && password) {
      this.loginService.handleLogin(email, password).subscribe((data) => {
        console.log(data);
      });
    }
  }

  handleShowPassword() {
    this.showPassword.set(!this.showPassword());
  }

  ngOnDestroy(): void {}
}
