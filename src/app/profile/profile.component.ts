import { CaregiverService } from './../services/caregiver.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  public caregiver: any;

  constructor(private caregiverService: CaregiverService) {}

  ngOnInit() {
    this.caregiver = this.caregiverService.getCurrentCaregiver();
  }
}
