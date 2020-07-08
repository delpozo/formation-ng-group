import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { ParticienComponent } from './particien/particien.component';
import { AdminComponent } from './admin/admin.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { DetailRdvComponent } from './detail-rdv/detail-rdv.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { DetailParticienComponent } from './detail-particien/detail-particien.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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
    DetailParticienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
