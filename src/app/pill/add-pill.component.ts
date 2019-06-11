import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patient } from '../shared/patient.model';
import { PillService } from './../services/pill.service';

@Component({
  selector: 'app-add-pill',
  templateUrl: './add-pill.component.html'
})
export class AddPillComponent implements OnInit {
  public recurrences = [];
  public selectedDayRecurrences = 'everyDay';
  public timeOfDays = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  public timeOfDaysToDisplay = [];
  public timeOfDayNumber = 0;

  public isActive = null;
  public isEveryDay = true;
  public isEveryWeek: boolean;
  public isEveryMonth: boolean;

  public selectedDaysOfWeek: string[] = [];

  @Input() patient: Patient;

  @Output() onHide = new EventEmitter<boolean>();
  setHide() {
    this.onHide.emit(true);
  }

  constructor(private pillService: PillService) {}

  ngOnInit() {
    this.recurrences = [
      { label: 'Elke dag', value: 'everyDay' },
      { label: 'Elke week', value: 'everyWeek' },
      { label: 'Elke maand', value: 'everyMonth' }
    ];

    this.timeOfDaysToDisplay = this.timeOfDays.slice(0, this.timeOfDayNumber);
  }

  public setRecurrence(event) {
    switch (event.value) {
      case 'everyDay':
        this.isEveryDay = true;
        this.isEveryWeek = false;
        this.isEveryMonth = false;
        break;
      case 'everyWeek':
        this.isEveryWeek = true;
        this.isEveryDay = false;
        this.isEveryMonth = false;
        break;
      case 'everyMonth':
        this.isEveryMonth = true;
        this.isEveryWeek = false;
        this.isEveryDay = false;
        break;
    }
  }

  public addTimeInput() {
    if (this.timeOfDayNumber < 9) {
      this.timeOfDayNumber++;
      this.timeOfDaysToDisplay = this.timeOfDays.slice(0, this.timeOfDayNumber);
    }
  }

  public deleteTimeInput(e) {
    this.timeOfDayNumber--;
    this.timeOfDaysToDisplay = this.timeOfDays.slice(0, this.timeOfDayNumber);
  }

  public hide() {
    this.setHide();
  }

  public createPill(form: NgForm) {
    const val = form.value;

    this.pillService.createPill(val, this.patient.id).subscribe(res => {
      console.log(res);
    });
  }
}
