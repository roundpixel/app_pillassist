import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AddPillComponent } from './pill/add-pill.component';
import { PageNotFoundComponent } from './general/page-not-found.component';
import { CalendarComponent } from './calendar/calendar.component';

import { FullCalendarModule } from 'primeng/fullcalendar';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    AppComponent,
    AddPillComponent,
    PageNotFoundComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    ListboxModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
