import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pill',
  templateUrl: './add-pill.component.html'
})
export class AddPillComponent implements OnInit {
  public recurrences = [];
  public selectedDayRecurrences: string[] = [];
  public timeOfDays = [''];
  public timeOfDayNumber = 1;

  public isEveryDay = true;
  public isEveryWeek: boolean;
  public isEveryMonth: boolean;

  constructor() {}

  ngOnInit() {
    this.recurrences = [
      { label: 'Elke dag', value: 'everyDay' },
      { label: 'Elke week', value: 'everyWeek' },
      { label: 'Elke maand', value: 'everyMonth' }
    ];
  }

  public addTimeInput() {
    this.timeOfDayNumber++;
    this.timeOfDays.push('' + this.timeOfDayNumber);
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
}
