import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'header-navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role: string = '';

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.role = this.loginService.getRole();
  }

}
