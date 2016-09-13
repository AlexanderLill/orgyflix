import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { OverviewRoutes } from "./overview/index";

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...OverviewRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
