import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';
import { Pill } from '../shared/pill.model';
import { PillService } from './../services/pill.service';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styles: []
})
export class CalendarDayComponent implements OnInit {
  public pills: Array<Pill> = new Array<Pill>();
  public patient: Patient;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientService,
    private pillService: PillService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.pills = [];
      }
    });
  }

  ngOnInit() {
    this.patientService.getAll().subscribe(patients => {
      this.route.params.subscribe(params => {
        patients.forEach(patient => {
          if (patient.firstName === params.firstName) {
            this.patient = patient;
            this.patientService.changePatient(patient);
            this.getPills();
          }
        });
      });
    });
  }

  public getPills() {
    this.pillService
      .getAll(this.patient.id)
      .subscribe(res => (this.pills = res));
  }
}
