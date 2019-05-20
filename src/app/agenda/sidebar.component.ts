import * as $ from 'jquery';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild
  } from '@angular/core';
import { DateService } from './../services/date.service';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  public events: any[];
  public options: any;
  public currentMonthView: number;
  public isAddPillVisible: boolean;

  @ViewChild('fc') fc: { calendar: { prev: () => void; next: () => void } };
  @Input() patient: Patient;
  public _patient: Patient;

  public date = new Date();

  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.options = {
      header: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },
      locale: 'nl',
      height: 'parent',
      columnHeaderText: date => {
        switch (date.getDay()) {
          case 0:
            return 'Ma';
          case 1:
            return 'Di';
          case 2:
            return 'Wo';
          case 3:
            return 'Do';
          case 4:
            return 'Vr';
          case 5:
            return 'Za';
          case 6:
            return 'Zo';
        }
      },
      dateClick: info => {
        const currentDay = info.date;
        this.currentMonthView = info.view.currentStart.getMonth() + 1;

        this.setDate(currentDay);
        this.setDateDisplay(currentDay);
      }
    };
  }

  public setDate(date: Date) {
    this.date = date;
    this.dateService.changeDate(this.date);
  }

  public setDateDisplay(date: Date) {
    if (this.currentMonthView > date.getMonth() + 1) {
      this.prevMonth();
    } else if (this.currentMonthView < date.getMonth() + 1) {
      this.nextMonth();
    }

    // get date for span inside
    const dateClicked =
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2);

    // remove background from other dates
    $('.fc')
      .find('.fc-day')
      .removeClass('fc-state-highlight');

    // set all spans color to grey
    $('.fc')
      .find('[data-date] span')
      .css('color', '#51689b');

    // set specific span to white
    $('.fc')
      .find("[data-date='" + dateClicked + "'] span")
      .css('color', 'white');

    // give bg to clicked element
    $('.fc-bg')
      .find("[data-date='" + dateClicked + "']")
      .addClass('fc-state-highlight');
  }

  public prevMonth() {
    this.fc.calendar.prev();
  }

  public nextMonth() {
    this.fc.calendar.next();
  }
}
