import { AvatarModule } from 'ngx-avatar';
import { CommonModule } from '@angular/common';
import { NavDesktopComponent } from './nav-desktop.component';
import { NgModule } from '@angular/core';
import { PatientsModule } from '../patient/patients.module';
import { ResponsiveModule } from 'ngx-responsive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavDesktopComponent],
  imports: [
    PatientsModule,
    CommonModule,
    AvatarModule,
    RouterModule,
    ResponsiveModule.forRoot()
  ],
  exports: [NavDesktopComponent]
})
export class NavModule {}
