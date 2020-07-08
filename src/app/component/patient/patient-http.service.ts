import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../../model/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientHttpService {

  patients: Array<Patient> = new Array<Patient>();

  constructor(private http: HttpClient) {
    this.load();
  }

  findAll(): Array<Patient> {
    return this.patients;
  }

  find(id: number): Observable<Patient> {
    return this.http.get<Patient>("http://localhost:3000/patient/" + id);
  }

  create(patient: Patient) {
    return this.http.post<Patient>("http://localhost:3000/patient", patient).subscribe(resp => {
      this.load()
    }, error => console.log(error));
  }

  update(patient: Patient) {
    return this.http.put<Patient>("http://localhost:3000/patient/" + patient.id, patient).subscribe(resp => {
      this.load()
    }, error => console.log(error));
  }

  remove(id: number) {
    return this.http.delete<void>("http://localhost:3000/patient/" + id).subscribe(resp => {
      this.load()
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Patient>>("http://localhost:3000/patient").subscribe(resp => {
      this.patients = resp;
    }, error => console.log(error));
  }
}
