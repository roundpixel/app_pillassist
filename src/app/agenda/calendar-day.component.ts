import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { Pill } from '../shared/pill.model';
import { PillService } from './../services/pill.service';
@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styles: []
})
export class CalendarDayComponent implements OnInit {
  public pills: Array<Pill> = new Array<Pill>();
  public error: string;
  @Input() public _date: Date;

  constructor(private pillService: PillService) {}

  // update Date when it's clicked on in other component
  @Input()
  set date(date: Date) {
    this._date = date;
    this.loadPills();
  }

  ngOnInit() {
    const date1 = new Date(2019, 3, 9, 10, 33, 30, 0);
    const date2 = new Date(2019, 3, 9, 8, 33, 30, 0);

    this.getPills();
    this.loadPills();
  }

  public getPills() {
    this.pillService.getAll().subscribe(
      (res: Pill[]) => {
        this.pills = res;
      },
      err => {
        this.error = err;
      }
    );
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

      if (dateClicked === pillDate) {
        pill.display = true;
      } else {
        pill.display = false;
      }
    });
  }
}
