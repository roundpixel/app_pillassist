import { AccordionModule } from 'primeng/accordion';
import { AddPillComponent } from './pill/add-pill.component';
import { AgendaModule } from './agenda/agenda.module';
import { AppComponent } from './app.component';
import { AvatarModule } from 'ngx-avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { CoCaregiversComponent } from './co-caregiver/co-caregivers.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { HeaderTopComponent } from './general/header-top.component';
import { HistoryComponent } from './history/history.component';
import { httpInterceptorProviders } from './http-interceptors';
import { LOCALE_ID, NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './general/main.component';
import { NavModule } from './nav/nav.module';
import { PageNotFoundComponent } from './general/page-not-found.component';
import { PatientProfileComponent } from './profile/patient-profile.component';
import { PatientService } from './services/patient.service';
import { PatientsModule } from './patient/patients.module';
import { ProfileModule } from './profile/profile.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RegisterComponent } from './auth/register/register.component';
import { ResponsiveModule } from 'ngx-responsive';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './general/sidebar.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    HeaderTopComponent,
    AddPillComponent,
    MainComponent,
    RegisterComponent,
    SidebarComponent,
    PatientProfileComponent,
    CoCaregiversComponent,
    SettingsComponent,
    HistoryComponent
  ],
  imports: [
    TabViewModule,
    ReactiveFormsModule,
    AgendaModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    CalendarModule,
    AccordionModule,
    RadioButtonModule,
    ProfileModule,
    CheckboxModule,
    NavModule,
    BrowserModule,
    PatientsModule,
    routing,
    ResponsiveModule.forRoot(),
    AvatarModule,
    FormsModule,
    DialogModule
  ],
  exports: [CommonModule, RouterModule, BrowserModule, AvatarModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' },
    PatientService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
