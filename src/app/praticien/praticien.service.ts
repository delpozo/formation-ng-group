import { Injectable } from '@angular/core';
import {Praticien} from '../model/praticien';



@Injectable({
  providedIn: 'root'
})
export class PraticienServiceService {

  praticiens: Array<Praticien> = new Array<Praticien>();

  constructor() {
this.praticiens.push(new Praticien(1,"sulvan","test1.", "Bouajla","Bochra","Patient","tel": "0689598552");

  }
  findAll(): Array<Praticien> {
    return this.praticiens;
  }

  find(id: number): Praticien {
    return this.praticiens.find(praticien => praticien.id == id);
  }

remove(id: number) {
    let idx = this.praticiens.findIndex(praticien => praticien.id === id);

    if (idx > -1) {
      this.praticiens.splice(idx, 1);
    }
  }
}
