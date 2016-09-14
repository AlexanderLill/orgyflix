import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import { Event } from '../models/event';
import { Router } from "@angular/router";

@Component({
    selector: 'as-overview',
    templateUrl: 'app/overview/overview.html'
})

export class OverviewComponent implements OnInit {
    public sidebarHidden: Boolean;
    public events: Event[];

    constructor(private api: ApiService, private router: Router) {
        this.sidebarHidden = true;
    }

    ngOnInit() {
        this.api.getAllEvents().subscribe(results => this.events = results, error => this.events = null);
    }

    toggleSidebar() {
        this.sidebarHidden = !this.sidebarHidden;
    }

    selectEvent(event: Event) {
        this.router.navigate(['/events', event._id]);
    }
}
