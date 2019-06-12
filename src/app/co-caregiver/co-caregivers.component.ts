import { Caregiver } from '../shared/caregiver.model';
import { CaregiverService } from './../services/caregiver.service';
import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-co-caregivers',
  templateUrl: './co-caregivers.component.html',
  styles: []
})
export class CoCaregiversComponent implements OnInit {
  public allCaregivers: any;
  @Input() patient: Patient;

  constructor(private caregiverService: CaregiverService) {}

  ngOnInit() {
    this.caregiverService
      .getAll()
      .subscribe(caregivers => (this.allCaregivers = caregivers));
  }
}
