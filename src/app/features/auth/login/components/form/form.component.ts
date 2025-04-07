import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
})
export class FormComponent {
  protected formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleSubmit() {
    console.log('email: ', this.formLogin.value.email);
    console.log('password: ', this.formLogin.value.password);
  }
}
