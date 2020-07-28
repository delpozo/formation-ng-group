import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { PatientComponent } from './component/patient/patient.component';
import { ParticienComponent } from './component/particien/particien.component';
import { AdminComponent } from './component/admin/admin.component';
import { RendezVousComponent } from './component/rendez-vous/rendez-vous.component';
import { DetailRdvComponent } from './component/detail-rdv/detail-rdv.component';
import { DetailPatientComponent } from './component/detail-patient/detail-patient.component';
import { DetailParticienComponent } from './component/detail-particien/detail-particien.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PraticienComponent } from './praticien/praticien.component';
import { TestAlaComponent } from './test-ala/test-ala.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TestToSayfComponent } from './test-ala/test-to-sayf/test-to-sayf.component';
import {MatSelectModule} from '@angular/material/select';
import { ExpComponent } from './component/exp/exp.component';
import { DateAgoPipe } from './date-ago.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    PatientComponent,
    ParticienComponent,
    AdminComponent,
    RendezVousComponent,
    DetailRdvComponent,
    DetailPatientComponent,
    DetailParticienComponent,
    PraticienComponent,
    TestAlaComponent,
    TestToSayfComponent,
    ExpComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

