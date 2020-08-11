import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'
const AUTH_API = 'http://localhost:5000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      usernameOrEmail: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user:User): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      name:user.name,
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  signOut() {
    window.sessionStorage.clear();
  }

}
