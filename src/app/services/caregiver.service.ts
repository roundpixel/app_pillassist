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
  public caregivers: Array<Caregiver>;

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

  getAll(): Observable<Caregiver> {
    return this.http.get(`${this.baseUrl}/read.php`).pipe(
      map(res => {
        this.caregivers = res['caregivers'];
        return this.caregivers;
      }),
      catchError(this.handleError)
    );
  }

  getCurrentCaregiverId() {
    const currentCaregiver = JSON.parse(localStorage.getItem('currentUser'));
    return currentCaregiver.id;
  }

  getCurrentCaregiver() {
    const currentCaregiver = JSON.parse(localStorage.getItem('currentUser'));
    return currentCaregiver;
  }

  private handleError(error: HttpErrorResponse) {
    // return an observable with a user friendly message
    if (error.status === 409) {
      return throwError(
        'Oeps, het lijkt er op dat er al een account bestaat met dit emailadres. Probeer het opnieuw.'
      );
    } else if (error.status === 400) {
      return throwError(
        'Oeps, het lijkt er op dat u niet alle vereiste gegevens heeft ingevuld. Probeer het opnieuw.'
      );
    } else {
      return throwError('Oeps, er ging iets mis. Probeer het opnieuw.');
    }
  }
}
