import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  public caregiver: any;

  constructor() {}

  ngOnInit() {
    this.caregiver = {
      firstName: 'Louis',
      lastName: 'Bracke',
      url: 'louis-bracke'
    };
  }
}
