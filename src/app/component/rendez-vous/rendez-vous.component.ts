import { Component, OnInit } from '@angular/core';
import {Rdv} from '../../model/rdv';
import {RdvHttpService} from './rdv-http.service';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  rdvForm: Rdv = null;
  constructor(
    private rdvService: RdvHttpService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {

  }

  list() {
    return this.rdvService.findAll();
  }

  add() {
    this.rdvForm = new Rdv();
  }

  edit(id: number) {
    this.rdvService.find(id).subscribe(resp => {
      this.rdvForm = resp;
    }, error => console.log(error));

  }

  save() {
    if (this.rdvForm.id) {
      this.rdvService.update(this.rdvForm);
    } else {
      this.rdvService.create(this.rdvForm);
    }

    this.cancel();
  }

  remove(id: number) {
    this.rdvService.remove(id);
  }

  cancel() {
    this.rdvForm = null;
  }
}

