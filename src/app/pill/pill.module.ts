import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AddPillComponent } from './add-pill.component';
import { routing } from '../app.routing';

@NgModule({
  declarations: [AddPillComponent],
  imports: [CommonModule, DropdownModule, routing, BrowserAnimationsModule, CalendarModule, AccordionModule, RadioButtonModule],
  exports: []
})
export class PillModule {}
