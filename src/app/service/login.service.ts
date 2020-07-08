import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {map} from 'rxjs/operators';
import {Admin} from '../model/admin';
import {Patient} from '../model/patient';
import {Praticien} from '../model/praticien';

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

  authenticate(username: string, password: string, role: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}${role}?username=${username}&pwd=${password}`)
      .pipe(
        map(
          data => {
            if (data.length !== 0) {
              sessionStorage.setItem(USER, username);
              sessionStorage.setItem(ROLE, role);
            }
            return data;
          }
        )
      );
  }

  findAdminByIdAndRole(id: number, role: string): Observable<Admin> {
    return this.httpClient.get<Admin>(`${this.baseUrl}${role}/${id}`);
  }

  findPatientByIdAndRole(id: number, role: string): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseUrl}${role}/${id}`);
  }

  findPraticienByIdAndRole(id: number, role: string): Observable<Praticien> {
    return this.httpClient.get<Praticien>(`${this.baseUrl}${role}/${id}`);
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
    sessionStorage.clear();
    // sessionStorage.removeItem(USER);
    // sessionStorage.removeItem(ROLE);
  }

  isUserLoggedIn(): boolean {
    let user: string = sessionStorage.getItem(USER);

    return user !== null;
  }
}
