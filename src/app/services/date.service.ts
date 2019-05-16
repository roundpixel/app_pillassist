import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
  private dateSource = new BehaviorSubject(new Date());
  currentDate = this.dateSource.asObservable();

  constructor() {}

  changeDate(date: Date) {
    this.dateSource.next(date);
  }
}
