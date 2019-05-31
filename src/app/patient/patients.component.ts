import { Caregiver } from '../shared/caregiver.model';
import { CaregiverService } from './../services/caregiver.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styles: []
})
export class PatientsComponent implements OnInit {
  public patients: Array<Patient>;
  public caregiver: any;

  constructor(
    private patientService: PatientService,
    private caregiverService: CaregiverService
  ) {}

  ngOnInit() {
    this.patientService.getAll().subscribe(res => (this.patients = res));
    this.caregiver = this.caregiverService.getCurrentCaregiver();
  }
}
