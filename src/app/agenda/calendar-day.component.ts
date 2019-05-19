import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { DateService } from './../services/date.service';
import { Pill } from '../shared/pill.model';
import { PillService } from './../services/pill.service';
@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styles: []
})
export class CalendarDayComponent implements OnInit {
  public pills: Array<Pill> = new Array<Pill>();
  public _date: Date;

  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.dateService.currentDate.subscribe(
      date => ((this._date = date), this.loadPills())
    );

    this.getPills();
    this.loadPills();
  }

  public getPills() {
    const date1 = new Date(2019, 4, 16, 10, 33, 30, 0);
    const date2 = new Date(2019, 4, 16, 8, 33, 30, 0);
    this.pills = [
      {
        name: 'azilect',
        dose: '1',
        date: date1,
        time: date1.getHours() + ':' + date1.getMinutes(),
        description: 'neem doosje 2',
        display: false
      },
      {
        name: 'azilect',
        dose: '1',
        date: date2,
        time: date2.getHours() + ':' + date2.getMinutes(),
        description: 'neem doosje 2',
        display: false
      }
    ];
  }

  public loadPills() {
    const dateClicked =
      this._date.getDate() +
      '-' +
      this._date.getMonth() +
      '-' +
      this._date.getFullYear();

    this.pills.forEach(pill => {
      const pillDate =
        pill.date.getDate() +
        '-' +
        pill.date.getMonth() +
        '-' +
        pill.date.getFullYear();

      console.log(pillDate, dateClicked);

      if (dateClicked === pillDate) {
        pill.display = true;
      } else {
        pill.display = false;
      }
    });
  }
}
