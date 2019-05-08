import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-day-tomorrow',
  templateUrl: './calendar-day-tomorrow.component.html',
  styles: []
})
export class CalendarDayTomorrowComponent implements OnInit {
  public today = new Date();
  public tomorrow: string;

  constructor() {}

  ngOnInit() {
    this.today.setDate(this.today.getDate() + 1);
    this.tomorrow =
      this.today.getDate() +
      '-' +
      (this.today.getMonth() + 1) +
      '-' +
      this.today.getFullYear();
  }
}
