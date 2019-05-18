import { AvatarModule } from 'ngx-avatar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { PatientProfileComponent } from './patient-profile.component';

@NgModule({
  declarations: [ProfileComponent, PatientProfileComponent],
  imports: [CommonModule, AvatarModule, FormsModule]
})
export class ProfileModule {}
