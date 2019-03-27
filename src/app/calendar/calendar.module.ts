import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { CardModule } from 'primeng/card';
import { CalendarDayComponent } from './calendar-day.component';
import { registerLocaleData } from '@angular/common';
import localeNlBE from "@angular/common/locales/nl-BE";

registerLocaleData(localeNlBE);

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDayComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    CardModule
  ],
  exports: [
    CalendarComponent,
    CalendarDayComponent
  ]
})
export class CalendarModule { }
