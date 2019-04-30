import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './general/main.component';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './general/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '404',
    // canActivate: [AuthGuard],
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
