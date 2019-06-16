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
  patientsChanged = new BehaviorSubject<boolean>(false);

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

  changePatients() {
    this.patientsChanged.next(true);
    this.patientsChanged.next(false);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status !== 201) {
      return throwError('Error! Something went wrong: ' + error.error.message);
    }
  }

  changePatient(patient: Patient) {
    this.patientSource.next(patient);
  }

  createPatient(patient: Patient): Observable<any> {
    const caregiverId = this.caregiverService.getCurrentCaregiverId();
    return this.http
      .post(`${this.baseUrl}/create.php?caregiverId=${caregiverId}`, {
        data: patient
      })
      .pipe(
        map(res => {
          console.log(res);
        }),
        catchError(this.handleError)
      );
  }

  deletePatient(id: number) {
    return this.http.delete(`${this.baseUrl}/delete.php?id=${id}`).pipe(
      map(res => console.log(res)),
      catchError(this.handleError)
    );
  }

  editPatient(id: number, patient: Patient) {
    return this.http
      .put(`${this.baseUrl}/edit.php?id=${id}`, { data: patient })
      .pipe(
        map(res => console.log(res)),
        catchError(this.handleError)
      );
  }
}
