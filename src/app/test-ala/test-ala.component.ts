import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-ala',
  templateUrl: './test-ala.component.html',
  styleUrls: ['./test-ala.component.css']
})
export class TestAlaComponent implements OnInit {

  public nom = 'say';
  public pre: '';
  public Form1: FormGroup;
  public hasFormErrors: boolean;
  public Submit: boolean = false;
  public entete: boolean = true;

  constructor(
    private FormB: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  OK() {
    this.hasFormErrors = false;
    const controls = this.Form1.controls;
    console.log(controls);
    /** check form */
    if (this.Form1.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      this.hasFormErrors = true;
      return;
    }
    this.nom = controls.nom.value;
    this.Submit = true;
    this.entete = false;
    console.log(this.nom);
  }

  createForm(){
    this.Form1 = this.FormB.group(
      {
        // validateur required & min 4 & max 15
        nom: [ this.nom, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
        //ville: ['', Validators.required],
      }
    );
  }
}
