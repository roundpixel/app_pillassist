import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CaregiverService } from './../services/caregiver.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html'
})
export class NavDesktopComponent implements OnInit {
  public patients: any;
  public patientName: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    this.patientService.getAll().subscribe(res => {
      this.patients = res;
      this.route.children[0].params.subscribe(params => {
        this.patients.forEach(patient => {
          if (
            patient.firstName === params.firstName &&
            patient.lastName === params.lastName
          ) {
            this.changePatient(patient);
          }
        });
      });
    });
  }

  changePatient(patient: Patient) {
    this.patientService.changePatient(patient);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
