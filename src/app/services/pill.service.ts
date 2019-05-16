import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Pill } from './../shared/pill.model';

@Injectable({
  providedIn: 'root'
})
export class PillService {
  private baseUrl = 'http://localhost/backend_pillassist';
  private pills: Pill[];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pill[]> {
    return this.http.get(`${this.baseUrl}/pill/read.php`).pipe(
      map(res => {
        this.pills = res['data'];
        return this.pills;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! Something went wrong.');
  }
}
