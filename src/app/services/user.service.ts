import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  constructor(private router: Router) { }
  isLoggedIn() {
    if (window.localStorage.getItem("token")) {
      return true
    } else {
      this.router.navigateByUrl('/login')
      return false;
    }
  }
}
