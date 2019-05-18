import { AvatarModule } from 'ngx-avatar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, AvatarModule, FormsModule]
})
export class ProfileModule {}
