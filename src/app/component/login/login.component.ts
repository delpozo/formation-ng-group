import {Component, OnInit} from '@angular/core';
import {ID, LoginService, ROLE, USER} from '../../service/login.service';
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
  user: User ;
  errorMessage: string = '';

  Roles = [
    {role: 'admin'},
    {role: 'patient'},
    {role: 'praticien'}
  ];

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  doLogin() {
    this.loginService.authenticate(this.username, this.password, this.role).subscribe(
      data => {
        this.user = data[0];
        console.log(data);
        console.log('userrrrrrrr = ' + this.user.username);
        console.log('iddd = ' + this.user.id);
        if (data.length === 0) {
          this.errorMessage = 'Login ou mot de passe incorrecte';
        } else {
        if (this.role === 'admin') {
          this.router.navigate(['/home']);
        } else
          this.router.navigate(['/'+this.user.role]);
      }
      this.errorMessage = '';
        /*if (this.role === 'admin') {
           this.loginService.findAdminByIdAndRole(this.user.id, this.role).subscribe(
             data => {
               console.log(JSON.stringify(data));
               this.router.navigate(['/home']);
             },
             error => console.log(error)
           );
         }*/
      },
      error => console.log(error)
    );
  }
}
