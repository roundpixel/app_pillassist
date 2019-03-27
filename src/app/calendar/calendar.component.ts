import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { fcall } from 'q';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: []
})
export class CalendarComponent implements OnInit {
  public events: any[];
  public options: any;
  public currentMonthView: number;

  @ViewChild('fc') fc;

  public date = new Date();
  public changingMonth = false;

  constructor() { }

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

        this.setDateDisplay(currentDay);
      },
      // checks if new month is rendered
      datesRender: info => {
        if (!this.changingMonth) {
          this.date.setMonth(
            info.view.currentStart.getMonth()
          );
          this.setDateDisplay(
            this.date
          );
        }
      }
    };
  }

  public setDateDisplay(date: Date) {
    this.date = date;

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
      .find('[data-date=\'' + dateClicked + '\'] span')
      .css('color', 'white');

    // give bg to clicked element
    $('.fc-bg')
      .find('[data-date=\'' + dateClicked + '\']')
      .addClass('fc-state-highlight');
  }

  public prevMonth() {
    console.log('ga naar vorige maand');
    this.changingMonth = true;
    this.fc.calendar.prev();
  }

  public nextMonth() {
    console.log('ga naar volgende maand');
    this.changingMonth = true;
    this.fc.calendar.next();
  }
}
