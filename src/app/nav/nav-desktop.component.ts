import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html'
})
export class NavDesktopComponent implements OnInit {
  public patientNames = [];
  public patientAvatars = [];

  constructor() {}

  ngOnInit() {
    this.patientNames = ['John Doe', 'Louis Bracke', 'Thomas Harris'];

    this.patientNames.forEach(patientName => {
      // TODO: spaces should also be removed in db
      const patientImg = patientName.replace(/\s/g, '');
      const patientAvatar = { name: patientName, img: patientImg };
      this.patientAvatars.push(patientAvatar);
    });
  }
}
