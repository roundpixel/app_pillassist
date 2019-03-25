import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styles: []
})
export class CalendarDayComponent implements OnInit {
  pills = [];

  constructor() { }

  ngOnInit() {
    this.loadPills();
  }

  public loadPills() {
    this.pills = [
      {
        name: 'prolopa',
        dose: 1,
        time: '8:30',
        description: 'neem doosje 2 om 8u30'
      },
      {
        name: 'azilect',
        dose: 1,
        time: '8:30',
        description: 'neem doosje 2 om 8u30'
      }
    ];
  }

}
