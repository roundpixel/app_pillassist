import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PatientComponent } from './patient.component';
import { PatientProfileCardComponent } from './patient-profile-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PatientComponent, PatientProfileCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [PatientProfileCardComponent]
})
export class PatientModule {}
