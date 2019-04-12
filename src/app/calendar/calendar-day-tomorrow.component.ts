import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-day-tomorrow',
  templateUrl: './calendar-day-tomorrow.component.html',
  styles: []
})
export class CalendarDayTomorrowComponent implements OnInit {
  public date = new Date();

  constructor() {}

  ngOnInit() {
    this.date.setDate(this.date.getDate() + 1);
    const tommorow =
      this.date.getDate() +
      '-' +
      (this.date.getMonth() + 1) +
      '-' +
      this.date.getFullYear();
    console.log(tommorow);
  }
}
