import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  users: User[];

  getUsers() {
    this.userService.getAllUsers().subscribe((users: User[])=>{
      this.users = users;
    })
  }

  deleteUser(id: Number) {
    this.userService.deleteUser(id).subscribe(() => {
      alert(`User with id ${id} has been deleted!`);
      this.getUsers();
    })
  }
}
