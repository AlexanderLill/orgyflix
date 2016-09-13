import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './index';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';

@NgModule({
    imports: [
        LoginModule, RegistrationModule, RouterModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {
}
