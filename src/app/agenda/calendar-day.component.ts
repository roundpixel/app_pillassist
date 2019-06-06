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
      .subscribe(res => this.loadPills(res));
  }

  public loadPills(pills: Array<Pill>) {
    pills.forEach(pill => {
      const [startYear, startMonth, startDay] = [...pill.startDate.split('-')];
      pill.startDate = this.converStringToDate([
        startYear,
        startMonth,
        startDay
      ]);

      const [endYear, endMonth, endDay] = [...pill.endDate.split('-')];
      pill.endDate = this.converStringToDate([endYear, endMonth, endDay]);

      pill.isEveryMonday = pill.isEveryMonday === '1' ? true : false;
      pill.isEveryTuesday = pill.isEveryTuesday === '1' ? true : false;
      pill.isEveryWednesday = pill.isEveryWednesday === '1' ? true : false;
      pill.isEveryThursDay = pill.isEveryThursDay === '1' ? true : false;
      pill.isEveryFriday = pill.isEveryFriday === '1' ? true : false;
      pill.isEverySaturday = pill.isEverySaturday === '1' ? true : false;
      pill.isEverySunday = pill.isEverySunday === '1' ? true : false;

      if (
        pill.isEveryMonday ||
        pill.isEveryTuesday ||
        pill.isEveryWednesday ||
        pill.isEveryThursDay ||
        pill.isEveryFriday ||
        pill.isEverySaturday ||
        pill.isEverySunday
      ) {
        pill.showEvery = true;
      } else {
        pill.showEvery = false;
      }
    });

    this.pills = pills;
  }

  public converStringToDate([year, month, day]) {
    const monthIndex = month - 1;
    return new Date(year, monthIndex, day);
  }
}
