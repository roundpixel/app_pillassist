import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: []
})
export class CalendarComponent implements OnInit {
  public events: any[];
  public options: any;

  public date = new Date();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.navigateCalendar('left');
        break;
      case 'ArrowRight':
        this.navigateCalendar('right');
        break;
      case 'ArrowUp':
        this.navigateCalendar('up');
        break;
      case 'ArrowDown':
        this.navigateCalendar('down');
        break;
    }
  }

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
        this.setDateDisplay(info.date);
      }
    };
  }

  public setDateDisplay(date) {
    this.date = date;

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

  public navigateCalendar(direction) {
    const date = new Date();
    switch (direction) {
      case 'left':
        date.setDate(this.date.getDate() - 1);
        break;
      case 'right':
        date.setDate(this.date.getDate() + 1);
        break;
      case 'up':
        date.setDate(this.date.getDate() - 7);
        break;
      case 'down':
        date.setDate(this.date.getDate() + 7);
        break;
    }
    this.date = date;
    this.setDateDisplay(date);
  }
}
