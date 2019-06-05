import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styles: []
})
export class PatientProfileComponent implements OnInit {
  @Input() patient: Patient;
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.currentPatient.subscribe(patient => {
      this.patient = {
        id: patient.id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        tel: patient.tel,
        url: patient.url
      };
    });
  }

  edit(form) {
    this.closeEvent.emit(true);
  }
}
