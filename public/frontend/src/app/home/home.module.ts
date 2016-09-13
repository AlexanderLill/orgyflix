import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import { LoginComponent } from '../login/login.component';

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
