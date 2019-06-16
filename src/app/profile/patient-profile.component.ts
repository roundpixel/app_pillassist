import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styles: []
})
export class PatientProfileComponent implements OnInit {
  @Input() patient: Patient;
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit() {
    this.patientService.currentPatient.subscribe(patient => {
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

  edit(form: NgForm) {
    const val = form.value;

    this.patientService.editPatient(this.patient.id, val).subscribe(() => {
      this.patientService.changePatients();
      this.router.navigate([
        '/patient',
        this.patient.firstName,
        this.patient.lastName
      ]);
      this.closeEvent.emit();
    });
  }
}
