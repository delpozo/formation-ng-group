import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {PatientComponent} from './component/patient/patient.component';
import {DetailPatientComponent} from './component/detail-patient/detail-patient.component';
import {LoginComponent} from './component/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'patient/:id', component: DetailPatientComponent},
  {path: 'login', component: LoginComponent},
  {path: 'praticien', component: PatientComponent},
  {path: 'praticien/:id', component: DetailPatientComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
