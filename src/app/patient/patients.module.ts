import { AgendaModule } from './../agenda/agenda.module';
import { AvatarModule } from 'ngx-avatar';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PatientProfileCardComponent } from './patient-profile-card.component';
import { PatientsComponent } from './patients.component';
import { ResponsiveModule } from 'ngx-responsive';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [PatientsComponent, PatientProfileCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    AgendaModule,
    DialogModule,
    FormsModule,
    ResponsiveModule
  ],
  exports: [PatientProfileCardComponent]
})
export class PatientsModule {}
