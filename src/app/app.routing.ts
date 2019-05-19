import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './general/main.component';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './general/page-not-found.component';
import { PatientComponent } from './patient/patient.component';
import { PatientProfileComponent } from './profile/patient-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    redirectTo: '/patients',
    pathMatch: 'full'
  },
  {
    path: 'patients',
    canActivate: [AuthGuard],
    component: PatientComponent
  },
  {
    path: 'patient/:firstName/:lastName',
    canActivate: [AuthGuard],
    component: MainComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent
  },
  {
    path: 'profile/:firstName/:lastName',
    canActivate: [AuthGuard],
    component: PatientProfileComponent
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
