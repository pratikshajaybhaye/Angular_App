import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}
  login(username: any, password: any) {
    console.log(username, password);

    // api endponit

    var result = this._authService.checkUserNameandPwd(username, password);

    if (result == true) {
      window.alert('login successfully');

      // navigete home page.

      this._router.navigate(['home']);
    } else {
      window.alert('Invalid username and password');

      this._router.navigate(['login']);
    }
  }
}
