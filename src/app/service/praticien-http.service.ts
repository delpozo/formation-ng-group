import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Praticien} from '../model/praticien';

@Injectable({
  providedIn: 'root'
})
export class PraticienHttpService {

  praticiens: Array<Praticien> = new Array<Praticien>();
  baseUrl:string='http://localhost:3000/praticien/';
  constructor(private http: HttpClient) {
    this.load();
  }

  findAll(): Array<Praticien> {
    return this.praticiens;
  }

  find(id: number): Observable<Praticien> {
    return this.http.get<Praticien>(this.baseUrl + id);
  }

  create(praticien: Praticien) {
    return this.http.post<Praticien>(this.baseUrl, praticien).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  update(praticien: Praticien) {
    return this.http.put<Praticien>(this.baseUrl + praticien.id, praticien).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  remove(id: number) {
    return this.http.delete<void>(this.baseUrl + id).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Praticien>>(this.baseUrl).subscribe(resp => {
      this.praticiens = resp;

    }, error => console.log(error));
  }
}
