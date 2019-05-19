import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost/api_pillassist/caregiver';
  errorData: {};
  constructor(private http: HttpClient) {}

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email: string, password: string) {
    return this.http
      .post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map(caregiver => {
          console.log(caregiver);
          if (caregiver && caregiver.token) {
            localStorage.setItem('currentUser', JSON.stringify(caregiver));
          }
        }),
        catchError(this.handleError)
      );
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(
      'Oei, er ging iets mis. Check of je emailadres en paswoord zeker klopt.'
    );
  }
}
