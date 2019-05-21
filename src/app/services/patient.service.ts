import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Injectable()
export class PatientService {
  private patientSource = new BehaviorSubject(new Patient());
  currentPatient = this.patientSource.asObservable();

  public patients = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john_doe@gmail.com',
      tel: '04829102',
      url: 'john-doe'
    },
    {
      firstName: 'Yvette',
      lastName: 'Van Lankveld',
      email: '',
      tel: '015584685',
      url: 'yvette-van-lankveld'
    },
    {
      firstName: 'Jef',
      lastName: 'Janssens',
      email: 'jef_janssens@hotmail.com',
      tel: '04829102',
      url: 'jef'
    },
    {
      firstName: 'Yvonne',
      lastName: 'Segers',
      email: 'yvonneke@hotmail.com',
      tel: '04829102',
      url: 'yvonne'
    },
    {
      firstName: 'Paul',
      lastName: 'Van Espen',
      email: 'paul_vanespen@outlook.com',
      tel: '04829102',
      url: 'paul-van-espen'
    }
  ];

  constructor() {}

  changePatient(patient: Patient) {
    this.patientSource.next(patient);
  }
}
