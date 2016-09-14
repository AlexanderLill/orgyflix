import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import { Event } from '../models/event';

@Component({
    selector: 'as-overview',
    templateUrl: 'app/overview/overview.html',
})

export class OverviewComponent implements OnInit {
    public sidebarHidden: Boolean;
    public events: Event[];

    constructor(private api: ApiService) {
        this.sidebarHidden = true;
    }

    ngOnInit() {
        this.api.getAllEvents().subscribe(results => this.events = results, error => this.events = null);
    }

    toggleSidebar() {
        this.sidebarHidden = !this.sidebarHidden;
    }
}
