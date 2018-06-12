import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { User } from '../../../shared/models/user';
import { UsersService } from '../users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html'
})
export class UsersFormComponent implements OnInit, OnChanges {

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.prepareForm();
  }

  ngOnChanges() {
    this.prepareForm();
  }

  @Input() user: User;
  @Output() emitUser = new EventEmitter();
  userForm: FormGroup;

  createForm() {
    this.userForm = this.formBuilder.group({
      login: ['', Validators.required],
      name: [''],
      surname: [''],
      password: ['', Validators.required],
    })
  }

  prepareForm() {
    this.userForm.patchValue({
      name: this.user.name,
      login: this.user.login,
      surname: this.user.surname,
      password: this.user.password,
    });
  }

  prepareUser(): User {
    let user: User;
    const form = this.userForm;
    user = {
      name: form.controls['name'].value,
      surname: form.controls['surname'].value,
      login: form.controls['login'].value,
      password: form.controls['password'].value
    };

    if (this.user.id) {
      user.id = this.user.id
    }

    return user;
  }

  submit() {
    this.emitUser.emit(
      this.prepareUser()
    );
  }
}
