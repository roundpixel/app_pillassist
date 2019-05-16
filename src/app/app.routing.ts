import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './general/main.component';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './general/page-not-found.component';
import { PatientComponent } from './patient/patient.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/patients',
    pathMatch: 'full'
  },
  {
    path: 'patients',
    component: PatientComponent
  },
  {
    path: 'patient/:name',
    component: MainComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
