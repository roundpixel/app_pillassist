import { Component, OnInit } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: []
})
export class CalendarComponent implements OnInit {
  events: any[];
  options: any;

  constructor() {}

  ngOnInit() {
    this.options = {
      header: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },
      footer: {
        center: 'agendaWeek, month'
      },
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
        const allDaysBg = document.querySelectorAll('.fc-day');
        const allDaysTxt = document.querySelectorAll('[data-date] span');

        allDaysBg.forEach((day: HTMLElement) => {
          day.style.backgroundColor = 'white';
        });

        allDaysTxt.forEach((day: HTMLElement) => {
          day.style.color = '#51689b';
        });
        info.dayEl.style.borderRadius = '50%';
        info.dayEl.style.backgroundColor = '#AFE1FD';

        const date =
          info.date.getFullYear() +
          '-' +
          ('0' + (info.date.getMonth() + 1)).slice(-2) +
          '-' +
          ('0' + info.date.getDate()).slice(-2);

        const dayText = document.querySelectorAll(
          '[data-date=\'' + date + '\'] span'
        );

        dayText.forEach((day: HTMLElement) => {
          day.style.color = 'white';
        });
      }
    };
  }
}
