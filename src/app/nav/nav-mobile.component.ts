import { Component, Input, OnInit } from '@angular/core';
import { Patient } from './../shared/patient.model';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styles: []
})
export class NavMobileComponent implements OnInit {
  @Input() patient: Patient;

  constructor() {}

  ngOnInit() {}
}
