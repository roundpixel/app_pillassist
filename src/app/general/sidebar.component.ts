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
  isEditingPatient = false;
  isViewingCoCaregivers = false;

  @Input() patient: Patient;
  private patients: Array<Patient>;

  constructor(
    public route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    this.patientService.getAll().subscribe(patients => {
      this.route.params.subscribe(params => {
        patients.forEach(patient => {
          if (patient.firstName === params.firstName) {
            this.patientService.changePatient(patient);
          }
        });
      });
    });
  }

  showEditingPatient() {
    this.isEditingPatient = true;
  }

  close() {
    this.isEditingPatient = false;
  }

  showCoCaregivers() {
    this.isViewingCoCaregivers = true;
  }
}
