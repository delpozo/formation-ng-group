import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rdv} from '../../model/rdv';
import {LoginService} from '../../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class RdvHttpService {

  rdvs: Array<Rdv> = new Array<Rdv>();
  idPatient = parseInt(this.loginService.getId());
  constructor(
    private http: HttpClient,
    private loginService: LoginService)
  {
    this.findByPatient(this.idPatient);
  }

  findAll(): Array<Rdv> {
    return this.rdvs;
  }

  find(id: number): Observable<Rdv> {
    return this.http.get<Rdv>("http://localhost:3000/RDV/" + id);
  }

  findByPatient(idPatient: number) {
    this.http.get<Array<Rdv>>("http://localhost:3000/RDV?patient=" + idPatient ).subscribe(
      res =>{
        this.rdvs = res;
      }
    );
  }

  create(rdv: Rdv) {
    return this.http.post<Rdv>("http://localhost:3000/RDV", rdv).subscribe(resp => {
      this.findByPatient(this.idPatient);
    }, error => console.log(error));
  }

  update(rdv: Rdv) {
    return this.http.put<Rdv>("http://localhost:3000/RDV/" + rdv.id, rdv).subscribe(resp => {
      this.findByPatient(rdv.patient);
    }, error => console.log(error));
  }

  remove(id: number) {
    return this.http.delete<void>("http://localhost:3000/RDV/" + id).subscribe(resp => {
      this.findByPatient(this.idPatient);
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Rdv>>("http://localhost:3000/RDV").subscribe(resp => {
      this.rdvs = resp;
    }, error => console.log(error));
  }
}
