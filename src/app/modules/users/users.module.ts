import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersRoutes } from './users.routes';
import { UsersService } from './users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersFormComponent } from "./user-form/users-form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutes
  ],
  exports: [
    UsersListComponent,
    UsersAddComponent,
    UsersEditComponent,
    UsersRoutes
  ],
  declarations: [
    UsersListComponent,
    UsersAddComponent,
    UsersEditComponent,
    UsersFormComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
