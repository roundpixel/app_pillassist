import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styles: []
})
export class NavDesktopComponent implements OnInit {
  public patientName = 'Louis Bracke';

  constructor() {}

  ngOnInit() {}
}
