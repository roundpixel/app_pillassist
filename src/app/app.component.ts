import { ActivatedRoute, Router } from '@angular/router';
import { CaregiverService } from './services/caregiver.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './shared/patient.model';
import { PatientService } from './services/patient.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  router: any;
  patient: Patient;

  constructor(
    public _router: Router,
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    this.patientService.getAll().subscribe(res => {
      const patients = res;
      this.route.children[0].params.subscribe(params => {
        patients.forEach(patient => {
          if (patient.firstName === params.firstName) {
            this.patient = patient;
            this.patientService.changePatient(patient);
          }
        });
      });
    });
    this.patientService.currentPatient.subscribe(
      patient => (this.patient = patient)
    );
  }
}
