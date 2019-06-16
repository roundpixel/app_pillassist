import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
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
  isViewingSettings = false;

  @Input() patient: Patient;
  private patients: Array<Patient>;

  constructor(
    public route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.patientService.getAll().subscribe(patients => {
      this.route.params.subscribe(params => {
        patients.forEach(patient => {
          if (
            patient.firstName === params.firstName &&
            patient.lastName === params.lastName
          ) {
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

  showSettings() {
    this.isViewingSettings = true;
  }

  deletePatient(id: number) {
    this.confirmationService.confirm({
      message:
        'Bent u zeker dat u deze patiënt (en al zijn/haar medicatie) wilt verwijderen?',
      accept: () => {
        this.patientService.deletePatient(id).subscribe(
          () => {
            this.router.navigate(['/patients']);
          },
          error => console.log(error)
        );
      }
    });
  }
}
