import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: []
})
export class CalendarComponent implements OnInit {
  events: any[];
  options: any;

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
        // get date for span inside
        const date =
          info.date.getFullYear() +
          '-' +
          ('0' + (info.date.getMonth() + 1)).slice(-2) +
          '-' +
          ('0' + info.date.getDate()).slice(-2);

        // give bg to clicked element
        $('.fc')
          .find('.fc-day')
          .removeClass('fc-state-highlight');

        // set all spans color to grey
        $('.fc')
          .find('[data-date] span')
          .css('color', '#51689b');

        // set specific span to white
        $('.fc')
          .find('[data-date=\'' + date + '\'] span')
          .css('color', 'white');

        info.dayEl.classList.add('fc-state-highlight');
      }
    };
  }
}
