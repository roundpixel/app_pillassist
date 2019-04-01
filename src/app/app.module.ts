import { PillModule } from './pill/pill.module';
import { CalendarModule } from './calendar/calendar.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule, LOCALE_ID } from '@angular/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './general/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    CalendarModule,
    PillModule,
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
