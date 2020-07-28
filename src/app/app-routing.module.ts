import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {PatientComponent} from './component/patient/patient.component';
import {DetailPatientComponent} from './component/detail-patient/detail-patient.component';
import {LoginComponent} from './component/login/login.component';
import {PraticienComponent} from "./praticien/praticien.component";
import {RendezVousComponent} from './component/rendez-vous/rendez-vous.component';
import {DetailParticienComponent} from './component/detail-particien/detail-particien.component';
import {TestAlaComponent} from './test-ala/test-ala.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'patient/:id', component: DetailPatientComponent},
  {path: 'login', component: LoginComponent},
  {path: 'praticien', component: PraticienComponent},
  {path: 'praticien/:id', component: DetailPatientComponent},
  {path: 'rdv', component: RendezVousComponent},
  {path: 'rdv/:id', component: DetailPatientComponent},
  {path: 'test', component: TestAlaComponent},
  {path: 'test', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
