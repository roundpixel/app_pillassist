import { AccordionModule } from 'primeng/accordion';
import { AddPillComponent } from './pill/add-pill.component';
import { AgendaModule } from './agenda/agenda.module';
import { AppComponent } from './app.component';
import { AvatarModule } from 'ngx-avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DateService } from './services/date.service';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderTopComponent } from './general/header-top.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './general/main.component';
import { NavModule } from './nav/nav.module';
import { PageNotFoundComponent } from './general/page-not-found.component';
import { PatientModule } from './patient/patient.module';
import { PatientService } from './services/patient.service';
import { ProfileModule } from './profile/profile.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ResponsiveModule } from 'ngx-responsive';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    HeaderTopComponent,
    AddPillComponent,
    MainComponent
  ],
  imports: [
    AgendaModule,
    BrowserAnimationsModule,
    DropdownModule,
    CalendarModule,
    AccordionModule,
    RadioButtonModule,
    ProfileModule,
    CheckboxModule,
    NavModule,
    BrowserModule,
    PatientModule,
    routing,
    ResponsiveModule.forRoot(),
    AvatarModule
  ],
  exports: [CommonModule, RouterModule, BrowserModule, AvatarModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' },
    DateService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
