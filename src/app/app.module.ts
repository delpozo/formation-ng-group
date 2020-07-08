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
