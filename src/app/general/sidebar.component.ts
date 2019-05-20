import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  public isAddPillVisible: boolean;

  @Input() patient: Patient;
  private patients: Array<Patient>;

  constructor(
    public route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    this.patients = this.patientService.patients;

    this.route.params.subscribe(params => {
      this.patients.forEach(patient => {
        if (patient.firstName === params.firstName) {
          this.patientService.changePatient(patient);
        }
      });
    });
  }
}
