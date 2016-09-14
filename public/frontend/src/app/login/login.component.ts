import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ApiService } from "../services/api.service";

@Component({
    selector: 'as-login',
    templateUrl: 'app/login/login.html',
})
export class LoginComponent {
    public user: User       = new User();
    public errorMsg: String = '';

    constructor(private router: Router, private api: ApiService) {}

    login() {
        if (!this.user.username || !this.user.password) {
            this.errorMsg = "Please fill out all fields!";
        } else {
            this.router.navigate(['../overview']);
        }
    }
}

