import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService,
    private authService: AuthService,
  ) {}

  login(user: User): Observable<any> {
    return this.authService.login(user);
  }
}
