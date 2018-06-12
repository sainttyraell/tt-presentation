import { Component } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users-add',
  templateUrl: './users-add.component.html'
})
export class UsersAddComponent {

  constructor(
    private userService: UsersService,
    private router: Router
  ) {}

  user: User = new User();

  addUser(user: User) {
    this.userService.addUser(user).subscribe(()=>{
      alert(`User has been added!`);
      this.router.navigate(['/users']);
    })
  }
}
