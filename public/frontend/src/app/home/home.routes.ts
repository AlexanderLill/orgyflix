import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegistrationRoutes } from '../registration/registration.routes';

export const HomeRoutes: Routes = [
  { path: '',  component: HomeComponent },
    ...RegistrationRoutes
];
