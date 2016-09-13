import { Component } from '@angular/core';

@Component({
    selector: 'as-login',
    templateUrl: 'app/login/login.html',
})
export class LoginComponent {
    public user = new User('', '');
    public errorMsg = '';
}

export class User {
    constructor(
        public username: string,
        public password: string) { }

    login(user) {
        return "hello";
    }
}
