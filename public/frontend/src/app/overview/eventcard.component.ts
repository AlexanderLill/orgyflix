import {Component, OnInit, Input} from '@angular/core';
import { ApiService } from "../services/api.service";
import { Event } from '../models/event';
import { Router } from "@angular/router";

@Component({
    selector: 'eventcard',
    templateUrl: 'app/overview/eventcard.html',
})

export class EventcardComponent implements OnInit {

    @Input("event") event: Event;

    constructor(private router: Router, private api: ApiService) {
        // empty
    }

    ngOnInit() {
        // this.api.getAllEvents().subscribe(results => this.events = results, error => this.events = null);
    }

    onSelect(event: Event) {
        console.log(event._id);
        this.router.navigate(['/events', event._id]);
    }
}
