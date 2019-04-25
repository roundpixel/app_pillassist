import { AvatarModule } from 'ngx-avatar';
import { CommonModule } from '@angular/common';
import { NavDesktopComponent } from './nav-desktop.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NavDesktopComponent],
  imports: [CommonModule, AvatarModule],
  exports: [NavDesktopComponent]
})
export class NavModule {}
