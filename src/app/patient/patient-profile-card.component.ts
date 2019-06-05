import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-patient-profile-card',
  templateUrl: './patient-profile-card.component.html',
  styles: []
})
export class PatientProfileCardComponent implements OnInit {
  @Input() patient: Patient;

  constructor() {}

  ngOnInit() {}
}
