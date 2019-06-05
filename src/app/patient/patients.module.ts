import { AddPatientComponent } from './add-patient.component';
import { AgendaModule } from './../agenda/agenda.module';
import { AvatarModule } from 'ngx-avatar';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PatientProfileCardComponent } from './patient-profile-card.component';
import { PatientsComponent } from './patients.component';
import { ResponsiveModule } from 'ngx-responsive';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    PatientsComponent,
    PatientProfileCardComponent,
    AddPatientComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    AgendaModule,
    DialogModule,
    FormsModule,
    ResponsiveModule,
    ReactiveFormsModule
  ],
  exports: [PatientProfileCardComponent, AddPatientComponent]
})
export class PatientsModule {}
