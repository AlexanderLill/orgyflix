import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './index';
import { overviewRouting } from '../overview/overview.routes';
import { registrationRouting } from "../registration/registration.routes";

@NgModule({
    imports: [
        FormsModule, BrowserModule, overviewRouting, registrationRouting
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule {
}
