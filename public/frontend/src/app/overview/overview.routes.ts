import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { OverviewComponent } from './overview.component';

export const OverviewRoutes: Routes = [
    { path: 'overview',  component: OverviewComponent }
];

export const overviewRouting: ModuleWithProviders = RouterModule.forChild(OverviewRoutes);
