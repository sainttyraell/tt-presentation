import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public model: any = {};
  constructor(
    private loginService: LoginService
  ) { }

  login() {
    const user = new User();
    user.login = this.model.username;
    user.password = this.model.password;
    this.loginService.login(user).subscribe();
  }

}
