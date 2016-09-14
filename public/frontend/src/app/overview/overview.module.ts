import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OverviewComponent } from './index';
import { ApiService } from "../services/api.service";

@NgModule({
    declarations: [
        OverviewComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        OverviewComponent
    ],
    providers: [
        ApiService
    ]
})
export class OverviewModule {
}
