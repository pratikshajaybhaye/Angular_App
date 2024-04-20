import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkUserNameandPwd(username: any, password: any) {

 

    if (username == 'codemind@gmail.com' && password == '1234567') {
      localStorage.setItem('tokenkey', 'admin');
      return true;
    } else {
      return false;
    }
  }
}
