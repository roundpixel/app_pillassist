import { AppComponent } from './app.component';
import { AvatarModule } from 'ngx-avatar';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from './calendar/calendar.module';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './general/header-top.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { NavModule } from './nav/nav.module';
import { PageNotFoundComponent } from './general/page-not-found.component';
import { PillModule } from './pill/pill.module';
import { ResponsiveModule } from 'ngx-responsive';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

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
    NavModule,
    BrowserModule,
    routing,
    ResponsiveModule.forRoot(),
    AvatarModule
  ],
  exports: [CommonModule, RouterModule, BrowserModule, AvatarModule],
  providers: [{ provide: LOCALE_ID, useValue: 'nl-BE' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
