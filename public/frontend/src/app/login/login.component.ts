import { Component } from '@angular/core';
import { User } from './user.model';
import { Router } from '@angular/router';


@Component({
    selector: 'as-login',
    templateUrl: 'app/login/login.html',
})
export class LoginComponent {
    public user: User       = new User();
    public errorMsg: String = '';

    constructor(private router: Router) {}

    login() {
        if (!this.user.username || !this.user.password) {
            this.errorMsg = "Please fill out all fields!";
        } else {
            // Call API
            this.router.navigate(['../overview']);
        }
    }
}

