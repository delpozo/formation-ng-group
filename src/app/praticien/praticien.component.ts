import { Component, OnInit } from '@angular/core';
import {Praticien} from '../model/praticien';

@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.css']
})
export class PraticienComponent implements OnInit {
  praticienForm: Praticien = null;

  praticienModal: Praticien = null;




  constructor( private praticienService :praticienHttpService) { }


  ngOnInit(): void {
  }

  list(): Array<Praticien> {
    return this.praticienService.findAll();
  }

  add() {
    this.praticienForm= new Praticien();
    this.praticienForm.adresse = new Adresse();
  }

  edit(id: number) {
    this.praticienService.find(id).subscribe(resp => {
      this.praticienForm = resp;
      if (!this.praticienForm.adresse) {
        this.praticienForm.adresse = new Adresse();
      }
    }, error => console.log(error));

  }

  modal(id: number) {
    this.praticienFormService.find(id).subscribe(resp => {
      this.praticienModal = resp;
    }, error => console.log(error));
  }

  saveModal() {
    this.praticienService.update(this.praticienModalModal);
  }

  save() {
    if (this.praticienFormForm.id) {
      this.praticienService.update(this.pratcienForm);
    } else {
      this.praticienService.create(this.praticienFormForm);
    }

    this.cancel();
  }

  remove(id: number) {
    this.praticienService.remove(id);
  }

  cancel() {
    this.praticienForm = null;
  }

}


