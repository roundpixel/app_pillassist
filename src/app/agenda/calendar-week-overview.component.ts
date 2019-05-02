import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges
  } from '@angular/core';
import { Patient } from '../patient/patient.model';

@Component({
  selector: 'app-calendar-week-overview',
  templateUrl: './calendar-week-overview.component.html',
  styles: []
})
export class CalendarWeekOverviewComponent implements OnInit, OnChanges {
  public data: any;
  public options: any;

  constructor() {}

  @Input() patient: Patient;
  private _patient: Patient;

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

  ngOnChanges(changes: SimpleChanges) {
    const patient: SimpleChange = changes.patient;
    this._patient = patient.currentValue;
  }
}
