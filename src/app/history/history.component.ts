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
  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private pillService: PillService
  ) {}
  public patient: Patient;
  public pills;

  ngOnInit() {
    this.patientService.getAll().subscribe(patients => {
      this.route.params.subscribe(params => {
        patients.forEach(patient => {
          if (patient.firstName === params.firstName) {
            this.patient = patient;
            this.patientService.changePatient(patient);
            this.pillService.getAllPills(this.patient.id).subscribe(pills => {
              this.pills = pills;
              this.convertDates(this.pills);
            });
          }
        });
      });
    });
  }

  public convertDates(pills) {
    pills.forEach(pill => {
      const timeParts = pill.time.split(/[:]/);
      pill.time = this.convertStringToTimeString([timeParts[0], timeParts[1]]);

      const [Year, Month, Day] = [...pill.date.split('-')];
      pill.date = this.converStringToDate([Year, Month, Day]);
    });

    this.filterToPastWeeks(pills);
  }

  public convertStringToTimeString([hours, minutes]) {
    return hours + 'u' + minutes;
  }

  public converStringToDate([year, month, day]) {
    const monthIndex = month - 1;
    return new Date(year, monthIndex, day);
  }

  public filterToPastWeeks(pills) {
    const today = new Date();
    const beginDate = new Date(Date.now() - 12096e5);
    for (let i = pills.length - 1; i >= 0; i--) {
      if (pills[i].date < beginDate || pills[i].date > today) {
        pills.splice(i, 1);
      }
    }
  }
}
