import { CalendarDayComponent } from './calendar/calendar-day.component';
import { AddPillComponent } from './pill/add-pill.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './general/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarDayComponent
  },
  {
    path: 'add',
    component: AddPillComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
