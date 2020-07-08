import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Praticien} from '../model/praticien';

@Injectable({
  providedIn: 'root'
})
export class PraticienHttpService {

  praticiens: Array<Praticien> = new Array<Praticien>();

  constructor(private http: HttpClient) {
    this.load();
  }

  findAll(): Array<Praticien> {
    return this.praticiens;
  }

  find(id: number): Observable<Praticien> {
    return this.http.get<Praticien>('http://localhost:3000/praticiens/' + id);
  }

  create(praticien: Praticien) {
    return this.http.post<Praticien>('http://localhost:3000/praticiens', praticien).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  update(praticien: Praticien) {
    return this.http.put<Praticiencien>('http://localhost:3000/praticiens/' + praticien.id, praticien).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  remove(id: number) {
    return this.http.delete<void>('http://localhost:3000/praticiens/' + id).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Formateur>>('http://localhost:3000/formateurs').subscribe(resp => {
      this.formateurs = resp;
    }, error => console.log(error));
  }
}
