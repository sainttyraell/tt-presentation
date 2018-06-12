import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { AuthGuard } from 'src/app/shared/services/auth-guard.service';
import { UsersEditComponent } from './users-edit/users-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-user',
    component: UsersAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-user/:id',
    component: UsersEditComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutes {}
