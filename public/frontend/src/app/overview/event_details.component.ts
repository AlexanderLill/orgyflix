import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../models/event';
import { ApiService } from "../services/api.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'event-details',
    templateUrl: 'app/overview/event_details.html',
})
export class EventDetailsComponent implements OnInit, OnDestroy  {
    public event: Event;
    private sub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ApiService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'] + ""; // (+) converts string '_id' to a number
            this.service.getEvent(id).subscribe(result => this.event = result, error => this.event = null);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    gotToEvents() {
        this.router.navigate(['/overview']);
    }
}
