import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PatientService } from './patient.service';
import { Pill } from './../shared/pill.model';

@Injectable({
  providedIn: 'root'
})
export class PillService {
  private baseUrl = 'http://localhost/api_pillassist';
  private pills: Pill[];
  private patientId: number;

  constructor(
    private http: HttpClient,
    private patientService: PatientService
  ) {}

  getAll(patientId: number): Observable<Pill[]> {
    if (patientId) {
      return this.http
        .get(`${this.baseUrl}/pill/read.php?id=${patientId}`)
        .pipe(
          map(res => {
            this.pills = res['pillSchemas'];
            return this.pills;
          }),
          catchError(this.handleError)
        );
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError('Error! No pills found');
    } else {
      return throwError('Error! Something went wrong.');
    }
  }
}
