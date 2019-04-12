import { PillModule } from './pill/pill.module';
import { CalendarModule } from './calendar/calendar.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';

import { routing } from './app.routing';
import { ResponsiveModule } from 'ngx-responsive';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './general/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderTopComponent } from './general/header-top.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    HeaderTopComponent
  ],
  imports: [
    CalendarModule,
    PillModule,
    BrowserModule,
    routing,
    ResponsiveModule.forRoot()
  ],
  exports: [CommonModule, RouterModule, BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'nl-BE' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
