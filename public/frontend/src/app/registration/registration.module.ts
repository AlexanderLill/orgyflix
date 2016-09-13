import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './index';

@NgModule({
    declarations: [
        RegistrationComponent
    ],
    exports: [
        RegistrationComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ]
})

export class RegistrationModule {
}
