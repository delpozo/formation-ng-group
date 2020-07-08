import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Patient} from "../../model/patient";
import {PatientHttpService} from "../patient/patient-http.service";

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.css']
})
export class DetailPatientComponent implements OnInit {

  patientForm: Patient = new Patient();

  constructor(private activatedRoute: ActivatedRoute, private patientService: PatientHttpService) {
    this.activatedRoute.params.subscribe(params => {
      this.patientService.find(params.id).subscribe(data =>
        this.patientForm = data);
    });
  }

  ngOnInit(): void {
  }

  edit(id: number) {
    this.patientService.find(id).subscribe(resp => {
      this.patientForm = resp;
    }, error => console.log(error));
  }

  save() {
    if (this.patientForm.id) {
      this.patientService.update(this.patientForm);
    }
    this.cancel();
  }

  cancel() {
    this.patientForm = null;
  }

}
