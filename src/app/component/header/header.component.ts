import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';
import {RdvHttpService} from '../rendez-vous/rdv-http.service';
import {Rdv} from '../../model/rdv';

@Component({
  selector: 'header-navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role: string = '';

  countRdv: number = null;
  constructor(
    public loginService: LoginService,
    private router: Router,
    private rdvService: RdvHttpService) {
  }

  ngOnInit(): void {
    this.role = this.loginService.getRole();
    let rdv = this.listRdv();
    this.countRdv = rdv.length;
  }

  listRdv(): Array<Rdv> {
    return this.rdvService.findAll();
  }
  doLogout() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
