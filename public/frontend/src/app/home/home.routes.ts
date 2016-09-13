import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

export const HomeRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'login', component: LoginComponent }
];
