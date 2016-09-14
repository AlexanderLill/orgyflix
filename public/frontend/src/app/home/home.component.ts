import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'as-home',
    templateUrl: 'app/home/home.html',
    styleUrls: [
        'app/home/home.css'
    ]
})
export class HomeComponent {
    constructor(private router: Router) {}

    register() {
        this.router.navigate(['/registration'])
    }
}
