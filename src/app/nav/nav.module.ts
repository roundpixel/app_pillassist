import { AvatarModule } from 'ngx-avatar';
import { CommonModule } from '@angular/common';
import { NavDesktopComponent } from './nav-desktop.component';
import { NgModule } from '@angular/core';
import { ResponsiveModule } from 'ngx-responsive';

@NgModule({
  declarations: [NavDesktopComponent],
  imports: [CommonModule, AvatarModule, ResponsiveModule.forRoot()],
  exports: [NavDesktopComponent]
})
export class NavModule {}
