import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { CalendarDayComponent } from './calendar-day.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { registerLocaleData } from '@angular/common';
import localeNlBE from '@angular/common/locales/nl-BE';
import { routing } from '../app.routing';

registerLocaleData(localeNlBE);

@NgModule({
  declarations: [CalendarComponent, CalendarDayComponent],
  imports: [CommonModule, FullCalendarModule, routing, OverlayPanelModule],
  exports: [CalendarComponent, CalendarDayComponent]
})
export class CalendarModule {}
