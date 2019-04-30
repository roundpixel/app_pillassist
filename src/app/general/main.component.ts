import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  title = 'pillassist';
  public isCalendarVisible = true;
  public isAddPillVisible: boolean;

  constructor() {}

  ngOnInit() {}
}
