import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Injectable()
export class PatientService {
  private patientSource = new BehaviorSubject(new Patient());
  currentPatient = this.patientSource.asObservable();

  constructor() {}

  changePatient(patient: Patient) {
    this.patientSource.next(patient);
  }
}
