import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  title = 'pillassist';
  public isCalendarVisible = true;
  public isAddPillVisible: boolean;
  public patient: Patient;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.currentPatient.subscribe(patient => {
      this.patient = {
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        tel: patient.tel,
        url: patient.url
      };
    });
  }

  public prettify(str) {
    return str.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
      return (prep && ' ') + letter.toUpperCase();
    });
  }
}
