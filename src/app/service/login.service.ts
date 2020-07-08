import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {map} from 'rxjs/operators';
import {Admin} from '../model/admin';

export const USER = 'userAuthenticated';
export const ROLE = 'role';
export const ID = 'id';

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
            let id = data[0].id;
            console.log(data);
            sessionStorage.setItem(USER, username);
            sessionStorage.setItem(ROLE, role);
            sessionStorage.setItem(ID, id);
            return data;
          }
        )
      );
  }

  findAdminByIdAndRole(id: number, role: string): Observable<Admin> {
    return this.httpClient.get<Admin>(`${this.baseUrl}${role}/${id}?role=${role}`);
  }

  getUserAuthenticated() {
    return sessionStorage.getItem(USER);
  }

  getRole() {
    if (this.getUserAuthenticated()) {
      return sessionStorage.getItem(ROLE);
    }
  }

  getId() {
    if (this.getUserAuthenticated()) {
      return sessionStorage.getItem(ID);
    }
  }

  logout() {
    sessionStorage.clear();
    // sessionStorage.removeItem(USER);
    // sessionStorage.removeItem(ROLE);
  }

  isUserLoggedIn(): boolean {
    let user: string = sessionStorage.getItem(USER);

    return user !== null;
  }
}
