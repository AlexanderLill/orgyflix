import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { overviewRouting } from '../overview/overview.routes';
import { RegistrationComponent } from './index';

@NgModule({
    declarations: [
        RegistrationComponent
    ],
    exports: [
        RegistrationComponent
    ],
    imports: [
        BrowserModule, FormsModule, overviewRouting
    ]
})

export class RegistrationModule {
}
