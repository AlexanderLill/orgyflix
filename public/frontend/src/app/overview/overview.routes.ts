import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { OverviewComponent } from './overview.component';
import { EventDetailsComponent } from "./event_details.component";

export const OverviewRoutes: Routes = [
    { path: 'overview',  component: OverviewComponent },
    { path: 'events/:id', component: EventDetailsComponent }
];

export const overviewRouting: ModuleWithProviders = RouterModule.forChild(OverviewRoutes);
