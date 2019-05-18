import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PatientComponent } from './patient.component';
import { PatientProfileCardComponent } from './patient-profile-card.component';

@NgModule({
  declarations: [PatientComponent, PatientProfileCardComponent],
  imports: [CommonModule],
  exports: [PatientProfileCardComponent]
})
export class PatientModule {}
