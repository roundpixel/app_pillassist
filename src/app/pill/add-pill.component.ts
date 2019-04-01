import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pill',
  templateUrl: './add-pill.component.html'
})
export class AddPillComponent implements OnInit {

  public timeOfDays = [];

  constructor() { }

  ngOnInit() {
    this.timeOfDays = [
      { label: '0:00', value: '0:00' },
      { label: '1:00', value: '0:00' },
      { label: '2:00', value: '0:00' },
      { label: '3:00', value: '0:00' },
      { label: '4:00', value: '0:00' },
      { label: '5:00', value: '0:00' },
      { label: '6:00', value: '0:00' },
      { label: '7:00', value: '0:00' },
      { label: '8:00', value: '0:00' },
      { label: '9:00', value: '0:00' },
      { label: '10:00', value: '0:00' },
      { label: '11:00', value: '0:00' },
      { label: '12:00', value: '0:00' },
      { label: '13:00', value: '0:00' },
      { label: '14:00', value: '0:00' },
      { label: '15:00', value: '0:00' },
      { label: '16:00', value: '0:00' },
      { label: '17:00', value: '0:00' },
      { label: '18:00', value: '0:00' },
      { label: '19:00', value: '0:00' },
      { label: '20:00', value: '0:00' },
      { label: '21:00', value: '0:00' },
      { label: '22:00', value: '0:00' },
      { label: '23:00', value: '0:00' },
      { label: '24:00', value: '0:00' }
    ];
  }

}
