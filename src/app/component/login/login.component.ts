import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  role: string = 'admin';
  user: User = null;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  doLogin() {
    this.loginService.authenticate(this.username, this.password, this.role).subscribe(
      data => {
        this.user = data;
        console.log(JSON.stringify(data));
        console.log('userrrrrrrr = ' + this.user.username);
        console.log('iddd = ' + this.loginService.getId());
        // if (this.role === 'admin') {
        //   this.loginService.findAdminByIdAndRole(this.user.id, this.role).subscribe(
        //     data => {
        //       console.log(JSON.stringify(data));
        //       this.router.navigate(['/home']);
        //     },
        //     error => console.log(error)
        //   );
        // }
      },
      error => console.log(error)
    );
  }
}
