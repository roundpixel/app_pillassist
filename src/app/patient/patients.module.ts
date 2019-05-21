import { AgendaModule } from './../agenda/agenda.module';
import { AvatarModule } from 'ngx-avatar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PatientProfileCardComponent } from './patient-profile-card.component';
import { PatientsComponent } from './patients.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PatientsComponent, PatientProfileCardComponent],
  imports: [CommonModule, RouterModule, AvatarModule, AgendaModule],
  exports: [PatientProfileCardComponent]
})
export class PatientsModule {}
