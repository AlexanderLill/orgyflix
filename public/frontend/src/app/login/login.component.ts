import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'as-login',
    templateUrl: 'app/login/login.html',
})
export class LoginComponent {

    constructor(public user = new User('', ''),
                public errorMsg = '',
                private router: Router ) {}

    login() {
        if (!this.user.username || !this.user.password) {
            this.errorMsg = "Please fill out all fields!";
        } else {
            // Call API
            this.router.navigate(['../overview']);
        }
    }
}

export class User {
    constructor(
        public username: string,
        public password: string) { }
}
