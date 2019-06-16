import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';
import { PillService } from './../services/pill.service';

@Component({
  selector: 'app-calendar-week-overview',
  templateUrl: './calendar-week-overview.component.html',
  styles: []
})
export class CalendarWeekOverviewComponent implements OnInit {
  public data: {
    labels: string[];
    datasets: { data: number[]; backgroundColor: string[] }[];
  };
  public options: any;
  public pills: any;
  public onTime = 0;
  public tooLate = 0;

  constructor(
    private patientService: PatientService,
    private pillService: PillService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @Input() patient: Patient;

  ngOnInit() {
    this.data = {
      labels: ['Op tijd', 'Te laat'],
      datasets: [
        {
          data: [0, 0],
          backgroundColor: ['#35A6F5', '#52699B']
        }
      ]
    };

    if (this.router.url === '/patients') {
      this.pillService.getAllPills(this.patient.id).subscribe(pills => {
        this.pills = pills;
        this.convertDates(this.pills);
        this.filterToPastWeek(this.pills);
        this.setData();
      });
    } else {
      this.patientService.getAll().subscribe(patients => {
        this.route.params.subscribe(params => {
          patients.forEach(patient => {
            if (
              patient.firstName === params.firstName &&
              patient.lastName === params.lastName
            ) {
              this.patient = patient;
              this.patientService.changePatient(patient);
              this.pillService.getAllPills(this.patient.id).subscribe(pills => {
                this.pills = pills;
                this.convertDates(this.pills);
                this.filterToPastWeek(this.pills);
                this.setData();
              });
            }
          });
        });
      });
    }

    this.options = {
      cutoutPercentage: 85,
      aspectRatio: 1,
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      }
    };
  }

  public convertDates(pills) {
    pills.forEach(pill => {
      const [Year, Month, Day] = [...pill.date.split('-')];
      pill.date = this.converStringToDate([Year, Month, Day]);
    });
  }

  public filterToPastWeek(pills) {
    const today = new Date();
    const beginDate = new Date(Date.now() - 604800000);
    for (let i = pills.length - 1; i >= 0; i--) {
      if (pills[i].date < beginDate || pills[i].date > today) {
        pills.splice(i, 1);
      }
    }
  }

  public converStringToDate([year, month, day]) {
    const monthIndex = month - 1;
    return new Date(year, monthIndex, day);
  }

  public setData() {
    this.onTime = 0;
    this.tooLate = 0;
    for (let i = 0; i < this.pills.length; i++) {
      if (this.pills[i].isTaken === '1') {
        this.onTime++;
      } else {
        this.tooLate++;
      }
    }

    this.data = {
      labels: ['Op tijd', 'Te laat'],
      datasets: [
        {
          data: [this.onTime, this.tooLate],
          backgroundColor: ['#35A6F5', '#52699B']
        }
      ]
    };
  }
}
