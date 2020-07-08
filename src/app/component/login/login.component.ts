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
  role: string = 'patient';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  doLogin() {
    this.loginService.authenticate(this.username, this.password, this.role).subscribe(
      data => {
        if (data.length === 0) {
          this.errorMessage = 'Login ou mot de passe incorrecte';
        } else {
          if (this.role === 'admin') {
            this.loginService.findAdminByIdAndRole(data[0].id, this.role).subscribe(
              data => {
                console.log(JSON.stringify(data));
                this.router.navigate(['/home']);
              },
              error => console.log(error)
            );
          } else if (this.role === 'patient') {
            this.loginService.findPatientByIdAndRole(data[0].id, this.role).subscribe(
              data => {
                console.log(JSON.stringify(data));
                this.router.navigate(['/home']);
              },
              error => console.log(error)
            );
          } else {
            this.loginService.findPraticienByIdAndRole(data[0].id, this.role).subscribe(
              data => {
                console.log(JSON.stringify(data));
                this.router.navigate(['/home']);
              },
              error => console.log(error)
            );
          }
          this.errorMessage = '';
        }
      },
      error => console.log(error));
  }
}
