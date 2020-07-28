import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Exp} from '../model/exp';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  exps: Array<Exp> = new Array<Exp>();
  baseUrl:string='http://localhost:3000/Exp';
  constructor(
    private http: HttpClient
  ) {
    this.load();
  }

  findAll(): Observable<Exp> {
    return this.http.get<Exp>(this.baseUrl);
  }

  find(id: number): Observable<Exp> {
    return this.http.get<Exp>(this.baseUrl + id);
  }

  create(exp: Exp): Observable<Exp> {
    return this.http.post<Exp>(this.baseUrl, exp);
  }

  load() {
    this.http.get<Array<Exp>>(this.baseUrl).subscribe(resp => {
      this.exps = resp;

    }, error => console.log(error));
  }
}
