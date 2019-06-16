import localeNlBE from '@angular/common/locales/nl-BE';
import { AvatarModule } from 'ngx-avatar';
import { CalendarDayComponent } from './calendar-day.component';
import { CalendarWeekOverviewComponent } from './calendar-week-overview.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgModule } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { registerLocaleData } from '@angular/common';
import { ResponsiveModule } from 'ngx-responsive';
import { routing } from '../app.routing';

registerLocaleData(localeNlBE);

@NgModule({
  declarations: [CalendarDayComponent, CalendarWeekOverviewComponent],
  imports: [
    ConfirmDialogModule,
    CommonModule,
    ChartModule,
    AvatarModule,
    routing,
    OverlayPanelModule,
    ResponsiveModule.forRoot()
  ],
  exports: [CalendarDayComponent, CalendarWeekOverviewComponent]
})
export class AgendaModule {}
