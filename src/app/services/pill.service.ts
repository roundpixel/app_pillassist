import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PatientService } from './patient.service';
import { PillSchema } from '../shared/pillSchema.model';

@Injectable({
  providedIn: 'root'
})
export class PillService {
  private baseUrl = 'http://localhost/api_pillassist';
  private pillSchema: PillSchema[];

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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError('Error! No pills found');
    } else {
      return throwError('Error! Something went wrong.');
    }
  }
}
