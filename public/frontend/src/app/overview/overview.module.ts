import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OverviewComponent } from './index';

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
    ]
})
export class OverviewModule {
}
