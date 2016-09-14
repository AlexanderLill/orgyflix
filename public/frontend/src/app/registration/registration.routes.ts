import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { RegistrationComponent } from './registration.component';

export const RegistrationRoutes: Routes = [
    { path: 'registration',  component: RegistrationComponent }
];

export const registrationRouting: ModuleWithProviders = RouterModule.forChild(RegistrationRoutes);
