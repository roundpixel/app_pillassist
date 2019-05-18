import localeNlBE from '@angular/common/locales/nl-BE';
import { AvatarModule } from 'ngx-avatar';
import { CalendarComponent } from './calendar.component';
import { CalendarDayComponent } from './calendar-day.component';
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
    CalendarWeekOverviewComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    FullCalendarModule,
    AvatarModule,
    routing,
    OverlayPanelModule,
    ResponsiveModule.forRoot()
  ],
  exports: [
    CalendarComponent,
    CalendarDayComponent,
    CalendarWeekOverviewComponent
  ]
})
export class AgendaModule {}
