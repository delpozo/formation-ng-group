import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {map} from 'rxjs/operators';

export const USER = 'userAuthenticated';
export const ROLE = 'role';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username: string, password: string, role: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}${role}?username=${username}&password=${password}&role=${role}`)
      .pipe(
        map(
          data => {
            sessionStorage.setItem(USER, data.username);
            sessionStorage.setItem(ROLE, data.role);
            return data;
          }
        )
      );
  }

  getUserAuthenticated() {
    return sessionStorage.getItem(USER);
  }

  getRole() {
    if (this.getUserAuthenticated()) {
      return sessionStorage.getItem(ROLE);
    }
  }

  logout() {
    // sessionStorage.clear();
    sessionStorage.removeItem(USER);
  }

  isUserLoggedIn(): boolean {
    let user: string = sessionStorage.getItem(USER);

    return user !== null;
  }
}
