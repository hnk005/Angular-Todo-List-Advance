import { Component } from '@angular/core';
import { TokenService } from 'src/app/core/services/token-service/token.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(protected readonly tokenService: TokenService) {}

  onClickLogout() {
    this.tokenService.removeToken();
    window.location.reload();
  }
}
