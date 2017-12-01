import { MenuServicesComponent } from './menu-services/menu-services.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [  // Routes string, where Router will check the navigation and its properties.
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '/login', pathMatch: 'full' }];  // Redirect if url path do not match with any other route.

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes); // Export of the routing module.
