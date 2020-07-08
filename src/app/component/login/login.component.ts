import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  role: string = '';

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  doLogin() {
    this.loginService.authenticate(this.username, this.password, 'admin').subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigate(['/home']);
      },
      error => console.log(error)
    );
  }
}
