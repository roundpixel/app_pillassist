import * as moment from 'moment';
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
import { PillSchema } from '../shared/pillSchema.model';
import { PillService } from './../services/pill.service';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styles: []
})
export class CalendarDayComponent implements OnInit {
  public pillSchema: Array<PillSchema> = new Array<PillSchema>();
  public patient: Patient;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientService,
    private pillService: PillService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.pillSchema = [];
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

  public loadPills(pills: Array<PillSchema>) {
    pills.forEach((pill, index) => {
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

      pill.pills.forEach(pillTime => {
        const timeParts = pillTime.time.split(/[:]/);
        pillTime.time = this.convertStringToTimeString([
          timeParts[0],
          timeParts[1]
        ]);
      });

      // if (index > 0) {
      //   console.log(pills[index - 1]);
      //   if (this.isSamePill(pill.name, pills[index - 1].name)) {
      //     const firstPillOfItsName = pills.find(p => {
      //       return p.name === pill.name;
      //     });
      //     firstPillOfItsName.pills = firstPillOfItsName.pills.concat(
      //       pill.pills
      //     );
      //   }

      //   //pills.splice(index, 1);

      //   //pills = pills.reduce((p, v, i) => (i !== index && p.push(v), p), []);
      // }

      this.pillSchema = pills;
    });
  }

  public isSamePill(previous, current) {
    if (previous === current) {
      return true;
    } else {
      return false;
    }
  }

  public converStringToDate([year, month, day]) {
    const monthIndex = month - 1;
    return new Date(year, monthIndex, day);
  }

  public convertStringToTimeString([hours, minutes]) {
    return hours + 'u' + minutes;
  }
}
