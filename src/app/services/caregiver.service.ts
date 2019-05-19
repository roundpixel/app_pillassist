import { Caregiver } from './../shared/caregiver.model';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaregiverService {
  private baseUrl = 'http://localhost/api_pillassist/caregiver';
  private caregivers: Caregiver[];

  constructor(private http: HttpClient) {}

  create(caregiver: Caregiver): Observable<Caregiver[]> {
    return this.http
      .post(`${this.baseUrl}/create.php`, { data: caregiver })
      .pipe(
        map(res => {
          this.caregivers.push(res['data']);
          return this.caregivers;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}