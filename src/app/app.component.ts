import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'pillassist';
  public isCalendarVisible = true;
  public isAddPillVisible: boolean;

  constructor() {}
}
