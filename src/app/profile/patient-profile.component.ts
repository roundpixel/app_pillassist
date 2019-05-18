import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styles: []
})
export class PatientProfileComponent implements OnInit {
  private patient: Patient;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.currentPatient.subscribe(patient => {
      this.patient = {
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        tel: patient.tel,
        url: patient.url
      };
    });
  }
}
