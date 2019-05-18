import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-calendar-week-overview',
  templateUrl: './calendar-week-overview.component.html',
  styles: []
})
export class CalendarWeekOverviewComponent implements OnInit {
  public data: any;
  public options: any;

  constructor() {}

  @Input() patient: Patient;

  ngOnInit() {
    this.data = {
      labels: ['Op tijd', 'Te laat'],
      datasets: [
        {
          data: [22, 2],
          backgroundColor: ['#35A6F5', '#52699B']
        }
      ]
    };

    this.options = {
      cutoutPercentage: 85,
      aspectRatio: 1,
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      }
    };
  }
}
