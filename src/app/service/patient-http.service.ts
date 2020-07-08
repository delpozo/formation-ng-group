import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Praticien} from '../model/praticien';
import {Patient} from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientHttpService {

  praticiens: Array<Patient> = new Array<Patient>();
  baseUrl:string='http://localhost:3000/patient/';
  constructor(private http: HttpClient) {
    this.load();
  }

  findAll(): Array<Patient> {
    return this.praticiens;
  }

  find(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.baseUrl + id);
  }

  create(patient: Patient) {
    return this.http.post<Patient>(this.baseUrl, patient).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  update(patient: Patient) {
    return this.http.put<Patient>(this.baseUrl + patient.id, patient).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  remove(id: number) {
    return this.http.delete<void>(this.baseUrl + id).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Patient>>(this.baseUrl).subscribe(resp => {
      this.praticiens = resp;

    }, error => console.log(error));
  }
}
