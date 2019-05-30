import { AgendaModule } from './../agenda/agenda.module';
import { AvatarModule } from 'ngx-avatar';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PatientProfileCardComponent } from './patient-profile-card.component';
import { PatientProfileComponent } from './../profile/patient-profile.component';
import { PatientsComponent } from './patients.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    PatientsComponent,
    PatientProfileCardComponent,
    PatientProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    AgendaModule,
    DialogModule,
    FormsModule
  ],
  exports: [PatientProfileCardComponent]
})
export class PatientsModule {}
