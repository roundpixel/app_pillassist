import {
  Component,
  EventEmitter,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'app-add-pill',
  templateUrl: './add-pill.component.html'
})
export class AddPillComponent implements OnInit {
  public recurrences = [];
  public selectedDayRecurrences: string[] = [];
  public timeOfDays = [];
  public timeOfDayNumber = 1;

  public isActive = null;
  public isEveryDay = true;
  public isEveryWeek: boolean;
  public isEveryMonth: boolean;

  @Output() onHide = new EventEmitter<boolean>();
  setHide() {
    this.onHide.emit(true);
  }

  constructor() {}

  ngOnInit() {
    this.timeOfDays = [
      { label: '7u30', value: '7:30' },
      { label: '8u', value: '8:00' },
      { label: '12u', value: '12:00' },
      { label: '17u', value: '17:00' },
      { label: '20u', value: '20:00' }
    ];

    this.recurrences = [
      { label: 'Elke dag', value: 'everyDay' },
      { label: 'Elke week', value: 'everyWeek' },
      { label: 'Elke maand', value: 'everyMonth' }
    ];
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

  public hide() {
    this.setHide();
  }
}
