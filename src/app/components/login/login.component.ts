import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private router: Router) {
    }
    title = 'app';
    model: any = {
        username: 'test@test.com',
        password: ''
    }
    onSubmit() {
        this.router.navigateByUrl('/home');
    }
}

