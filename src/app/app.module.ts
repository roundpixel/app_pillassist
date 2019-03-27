import { CalendarModule } from './calendar/calendar.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AddPillComponent } from './pill/add-pill.component';
import { PageNotFoundComponent } from './general/page-not-found.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddPillComponent,
    PageNotFoundComponent
  ],
  imports: [
    CalendarModule,
    BrowserModule,
    routing
  ],
  exports: [
    CommonModule,
    RouterModule,
    BrowserModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'nl-BE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
