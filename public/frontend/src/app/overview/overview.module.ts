import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OverviewComponent } from './index';
import { ApiService } from "../services/api.service";
import { EventDetailsComponent } from "./event_details.component";

@NgModule({
    declarations: [
        OverviewComponent,
        EventDetailsComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
    ],
    exports: [
        OverviewComponent,
        EventDetailsComponent
    ],
    providers: [
        ApiService
    ]
})

export class OverviewModule {
}
