import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { CalendarComponent } from './calendar/calendar.component';
import { AddPillComponent } from './pill/add-pill.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './general/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: CalendarComponent
  },
  {
    path: 'add',
    canActivate: [AuthGuard],
    component: AddPillComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '404',
    canActivate: [AuthGuard],
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
