import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Caregiver } from '../shared/caregiver.model';
import { CaregiverService } from './../services/caregiver.service';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styles: []
})
export class PatientsComponent implements OnInit {
  public patients: Array<Patient>;
  public caregiver: any;
  public isAddingPatient = false;

  constructor(
    private patientService: PatientService,
    private caregiverService: CaregiverService
  ) {}

  ngOnInit() {
    this.getPatients();
    this.caregiver = this.caregiverService.getCurrentCaregiver();
    setTimeout(() => {
      this.patientService.changePatient(new Patient());
    });
  }

  getPatients() {
    this.patientService.getAll().subscribe(
      res => {
        this.patients = res;
      },
      () => {}
    );
  }

  showAddPatient() {
    this.isAddingPatient = true;
  }

  close() {
    this.isAddingPatient = false;
  }
}
