import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';

import { AddPillComponent } from './add-pill.component';
import { routing } from '../app.routing';

@NgModule({
  declarations: [AddPillComponent],
  imports: [CommonModule, DropdownModule, routing],
  exports: []
})
export class PillModule {}
