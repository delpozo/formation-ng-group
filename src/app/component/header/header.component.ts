import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'header-navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role: string = '';

  constructor(public loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.role = this.loginService.getRole();
  }

  doLogout() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
