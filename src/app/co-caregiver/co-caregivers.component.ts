import { Caregiver } from '../shared/caregiver.model';
import { CaregiverService } from './../services/caregiver.service';
import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-co-caregivers',
  templateUrl: './co-caregivers.component.html',
  styles: []
})
export class CoCaregiversComponent implements OnInit {
  public allCaregivers: any;
  public selectedCaregivers: any;
  @Input() patient: Patient;

  constructor(
    private patientService: PatientService,
    private caregiverService: CaregiverService
  ) {}

  ngOnInit() {
    this.patientService.currentPatient.subscribe(res => {
      this.patient = res;
      if (this.patient.id) {
        this.caregiverService
          .getSelected(this.patient.id)
          .subscribe(caregivers => (this.selectedCaregivers = caregivers));
      }
    });

    this.caregiverService
      .getAll()
      .subscribe(caregivers => (this.allCaregivers = caregivers));
  }
}
