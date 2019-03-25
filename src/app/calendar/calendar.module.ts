import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { CardModule } from 'primeng/card';
import { CalendarDayComponent } from './calendar-day.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDayComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    CardModule
  ]
})
export class CalendarModule { }
