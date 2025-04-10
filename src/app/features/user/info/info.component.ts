import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.component.html',
})
export class InfoComponent {
  protected readonly name;
  constructor(protected readonly userService: UserService) {
    this.name = this.userService.getUser().name;
  }
}
