import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SERVER_API_URL } from 'src/app/shared/constants/constants';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { User } from 'src/app/shared/models/user';
class Logged {
  isLogged: boolean;
}
@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) {
    this.getCurrent();
  }

  loggedIn: boolean = false;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  private _setLoggedIn(value: boolean) {
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login(user: User) {
    return this.http
      .post(SERVER_API_URL + 'login', user, {observe: 'response', headers: new HttpHeaders()})
      .pipe(map(response => {
        let token = response.headers.get('Authorization');
        if (token) {
          this.localStorage.set('authenticationToken', token);
          this._setLoggedIn(true);
          this.router.navigate(['/home']);
        }
      }));
  }

  getCurrent() {
    if (this.loggedIn) {
      this._setLoggedIn(true);
      return true;
    }
    return this.http.get(`${SERVER_API_URL}api/user/current`, {responseType: 'text'})
      .pipe(
        map(res => {
          this._setLoggedIn(true);
          return !!res;
        }),
        catchError(() => {
          this._setLoggedIn(false);
          this.router.navigate(['/login']);
          return of(false);
        })
      );
  }

  logout() {
    this.localStorage.remove('authenticationToken');
    this._setLoggedIn(false);
    this.router.navigate(['/home']);
    this.getCurrent();
  }
}
