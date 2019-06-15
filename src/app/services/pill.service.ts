import {
  BehaviorSubject,
  Observable,
  Subject,
  throwError
  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientService } from './patient.service';
import { PillSchema } from '../shared/pillSchema.model';

@Injectable({
  providedIn: 'root'
})
export class PillService {
  private baseUrl = 'http://localhost/api_pillassist';
  private pillSchema: PillSchema[];
  private pills = Array();
  pillAdded = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getAll(patientId: number): Observable<PillSchema[]> {
    if (patientId) {
      return this.http
        .get(`${this.baseUrl}/pill/read.php?id=${patientId}`)
        .pipe(
          map(res => {
            this.pillSchema = res['pillSchemas'];
            return this.pillSchema;
          }),
          catchError(this.handleError)
        );
    }
  }

  changePills() {
    this.pillAdded.next(true);
    this.pillAdded.next(false);
  }

  getAllPills(patientId: number): Observable<any> {
    if (patientId) {
      return this.http
        .get(`${this.baseUrl}/pill/readPills.php?id=${patientId}`)
        .pipe(
          map(res => {
            this.pills = res['pills'];
            return this.pills;
          }),
          catchError(this.handleError)
        );
    }
  }

  createPill(data, patientId: number): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/pill/create?patientId=${patientId}`, data)
      .pipe(
        map(res => {
          console.log(res);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError('Error! No pills found');
    } else if (error.status === 201) {
      return throwError('Created');
    } else {
      return throwError('Error! Something went wrong.');
    }
  }
}
