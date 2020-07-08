import {Component, OnInit} from '@angular/core';
import {Praticien} from '../model/praticien';
import {Adresse} from "../model/adresse";
import {PraticienHttpService} from "../service/praticien-http.service";

@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.css']
})
export class PraticienComponent implements OnInit {
  praticienForm: Praticien = null;




  constructor(private praticienHttpService:PraticienHttpService ) {
  }


  ngOnInit(): void {

  }

  list(): Array<Praticien> {
    return this.praticienHttpService.findAll();
  }

  add() {
    this.praticienForm = new Praticien();
    this.praticienForm.adresse = new Adresse();
  }

  edit(id: number) {
    this.praticienHttpService.find(id).subscribe(resp => {
      this.praticienForm = resp;
      if (!this.praticienForm.adresse) {
        this.praticienForm.adresse = new Adresse();
      }
    }, error => console.log(error));

  }



  save() {
    if (this.praticienForm.id) {
      this.praticienHttpService.update(this.praticienForm);
    } else {
      this.praticienHttpService.create(this.praticienForm);
    }

    this.cancel();
  }

  remove(id: number) {
    this.praticienHttpService.remove(id);
  }

  cancel() {
    this.praticienForm = null;
  }

}


