import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UsersService } from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'users-add',
  templateUrl: './users-edit.component.html'
})
export class UsersEditComponent implements OnInit {

  user: User = new User();

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.activatedRoute.snapshot.params['id'])
      .subscribe((user: User)=>{
        this.user = user;
    })
  }

  editUser(user: User) {
    this.userService.editUser(user)
      .subscribe(()=>{
        this.router.navigate(['/users'])
      })
  }
}
