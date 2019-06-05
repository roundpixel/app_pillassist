import { Component, OnInit } from '@angular/core';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styles: []
})
export class NavMobileComponent implements OnInit {
  constructor(private patientService: PatientService) {}

  ngOnInit() {}
}
