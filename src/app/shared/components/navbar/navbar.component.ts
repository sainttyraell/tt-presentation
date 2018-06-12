import {Component, OnChanges, OnInit} from '@angular/core';
import { menuItems } from './navbar.constants';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) {}

  items = menuItems;
  loggedIn: boolean = false;

  ngOnInit() {
    this.authService.loggedIn$.subscribe(isLogged => {
      this.loggedIn = isLogged;
    })
  }

  logout() {
    this.authService.logout();
  }
}
