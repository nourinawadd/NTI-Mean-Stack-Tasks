import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html'
})
export class AuthComponent {
  username = '';
  imgurl = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username).subscribe();
  }

  register() {
    this.authService.register(this.username, this.imgurl).subscribe();
  }
}
