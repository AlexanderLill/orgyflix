import { Component } from '@angular/core';

@Component({
    selector: 'as-overview',
    templateUrl: 'app/overview/overview.html',
})
export class OverviewComponent {
    public sidebarHidden: Boolean;

    constructor() {
        this.sidebarHidden = true;
    }

    toggleSidebar() {
        this.sidebarHidden = !this.sidebarHidden;
    }
}
