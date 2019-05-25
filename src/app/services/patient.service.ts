import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { CaregiverService } from './caregiver.service';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Injectable()
export class PatientService {
  private patientSource = new BehaviorSubject(new Patient());
  currentPatient = this.patientSource.asObservable();
  private baseUrl = 'http://localhost/api_pillassist/patient';

  public patients = [];

  constructor(
    private http: HttpClient,
    private caregiverService: CaregiverService
  ) {}

  getAll(): Observable<any> {
    const caregiverId = this.caregiverService.getCurrentCaregiverId();
    return this.http.get(`${this.baseUrl}/read.php?id=${caregiverId}`).pipe(
      map(res => {
        this.patients = res['patients'];
        return this.patients;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! Something went wrong.');
  }

  changePatient(patient: Patient) {
    this.patientSource.next(patient);
  }
}
