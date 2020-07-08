import { Component, OnInit } from '@angular/core';
import {PatientHttpService} from './patient-http.service';
import {Patient} from '../../model/patient';
import {LoginService} from '../../service/login.service';
import {Rdv} from '../../model/rdv';
import {RdvHttpService} from '../rendez-vous/rdv-http.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientForm: Patient = null;
  rdvForm: Rdv = null;
  role = this.loginService.getRole();
  constructor(
    private patientService: PatientHttpService,
    private loginService: LoginService,
    private rdvService: RdvHttpService
  ) { }

  ngOnInit(): void {

  }

  list(): Array<Patient> {
    return this.patientService.findAll();
  }

  add() {
    this.patientForm = new Patient();
  }

  edit(id: number) {
    this.patientService.find(id).subscribe(resp => {
      this.patientForm = resp;
    }, error => console.log(error));

  }

  save() {
    if (this.patientForm.id) {
      this.patientService.update(this.patientForm);
    } else {
      this.patientService.create(this.patientForm);
    }

    this.cancel();
  }

  remove(id: number) {
    this.patientService.remove(id);
  }

  cancel() {
    this.patientForm = null;
  }
  addRdv(idPatient){
    this.rdvForm = new Rdv();
    this.rdvForm.patient = idPatient;
    this.rdvForm.praticien = parseInt(this.loginService.getId());
  }

  saveRdv() {
    //console.log(this.rdvForm.id)
    if (this.rdvForm.patient) {
      this.rdvService.create(this.rdvForm);
    }
    this.rdvForm = null;
  }
}
