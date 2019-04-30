import localeNlBE from '@angular/common/locales/nl-BE';
import { CalendarComponent } from './calendar.component';
import { CalendarDayComponent } from './calendar-day.component';
import { CalendarDayTomorrowComponent } from './calendar-day-tomorrow.component';
import { CalendarWeekOverviewComponent } from './calendar-week-overview.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { NgModule } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { registerLocaleData } from '@angular/common';
import { ResponsiveModule } from 'ngx-responsive';
import { routing } from '../app.routing';

registerLocaleData(localeNlBE);

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDayComponent,
    CalendarDayTomorrowComponent,
    CalendarWeekOverviewComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    FullCalendarModule,
    routing,
    OverlayPanelModule,
    ResponsiveModule.forRoot()
  ],
  exports: [
    CalendarComponent,
    CalendarDayComponent,
    CalendarDayTomorrowComponent,
    CalendarWeekOverviewComponent
  ]
})
export class AgendaModule {}
