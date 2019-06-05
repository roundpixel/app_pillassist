import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
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
    this.patientService.currentPatient
      .pipe(filter(patient => !isObjectEmpty(patient)))
      .subscribe(patient => {
        this.patient = {
          id: patient.id,
          firstName: patient.firstName,
          lastName: patient.lastName,
          email: patient.email,
          tel: patient.tel,
          city: patient.city,
          street: patient.street
        };
      });
  }

  public prettify(str) {
    return str.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
      return (prep && ' ') + letter.toUpperCase();
    });
  }
}

function isObjectEmpty(Obj) {
  for (const key in Obj) {
    if (Obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
