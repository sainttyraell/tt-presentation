import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from 'src/app/shared/constants/constants';
import { User } from 'src/app/shared/models/user';

@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient,
  ) {}

  userUrl: string = 'api/user';
  url: string = `${SERVER_API_URL}${this.userUrl}`;

  getAllUsers(): Observable<User[]> {
    const url = `${this.url}/all`;
    return this.http.get<User[]>(url);
  }

  getUserById(id: Number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  addUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }

  editUser(user: User): Observable<any> {
    return this.http.put(this.url, user);
  }

  deleteUser(id: Number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`,)
  }
}
