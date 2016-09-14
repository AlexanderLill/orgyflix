import { Component } from '@angular/core';
import { User } from "../login/user.model";
import { Router } from "@angular/router";

@Component({
    selector: 'as-registration',
    templateUrl: 'app/registration/registration.html',
})

export class RegistrationComponent {
    public repeatPassword = '';
    public errorMsg = '';
    public user = new User();

    constructor(private router: Router) {}

    register() {
        if (!this.user.username || !this.user.password || !this.user.firstname || !this.user.lastname) {
            this.errorMsg = "Please fill out all fields";
        } else if (this.user.password != this.repeatPassword) {
            this.errorMsg = "The two passwords don't match";
        } else {
            this.errorMsg = '';
            this.router.navigate(['../overview']);
        }
    }
}
