import { ActivatedRoute } from '@angular/router';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { filter } from 'rxjs/operators';
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
