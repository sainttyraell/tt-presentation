import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutes } from './login.routes';
import { FormsModule } from '@angular/forms';
import {LoginService} from './login/login.service';
import {LocalStorageService} from '../../shared/services/local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutes
  ],
  exports: [
    LoginRoutes,
    LoginComponent
  ],
  declarations: [LoginComponent],
  providers: [LoginService, LocalStorageService]
})
export class LoginModule { }
