import { CalendarModule } from './calendar/calendar.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AddPillComponent } from './pill/add-pill.component';
import { PageNotFoundComponent } from './general/page-not-found.component';

import { Router, RouterModule } from '@angular/router';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
