import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../../services/login.service";
@Component({
    selector: 'app-login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(
        private router: Router,
        private authService: LoginService
    ) { }
    title = 'app';
    route = this.router
    model: any = {
        email: 'peter@klaven',
        password: 'cityslicka'
    }
    formError: any = {
        email: "",
        password: ''
    }
    onSubmit() {
        var error = false
        if (!this.model.email) {
            this.formError.email = "* Required"
            error = true
        }
        if (!this.model.password) {
            this.formError.password = "* Required"
            error = true
        }
        if (!error) {
            this.authService.login(this.model).subscribe(
                (response) => {
                    var resp = response.json()
                    if (resp.token) {
                        window.localStorage.setItem("token", resp.token);
                        this.router.navigateByUrl('/');
                    } else {
                        console.log("error", resp)
                    }
                },
                (error) => {
                    console.log("Error", error)
                }
            )
        }
    }
}

