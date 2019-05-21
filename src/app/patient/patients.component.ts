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

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patients = this.patientService.patients;
  }
}
