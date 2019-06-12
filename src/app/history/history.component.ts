import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from '../services/patient.service';
import { PillService } from '../services/pill.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: []
})
export class HistoryComponent implements OnInit {
  public patient: Patient;
  public pills;
  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private pillService: PillService
  ) {}

  ngOnInit() {
    this.patientService.getAll().subscribe(patients => {
      this.route.params.subscribe(params => {
        patients.forEach(patient => {
          if (patient.firstName === params.firstName) {
            this.patient = patient;
            this.patientService.changePatient(patient);
            this.pillService.getAllPills(this.patient.id).subscribe(pills => {
              this.pills = pills;
            });
          }
        });
      });
    });
  }
}
