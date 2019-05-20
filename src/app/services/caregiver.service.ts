import { AuthService } from './../auth/auth.service';
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

  constructor(private http: HttpClient, private authService: AuthService) {}

  create(caregiver: Caregiver): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/create.php`, { data: caregiver })
      .pipe(
        map(res => {
          console.log(res);
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
