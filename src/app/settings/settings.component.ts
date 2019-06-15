import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit {
  @Input() patient: Patient;

  public options = [{ label: '10 minuten ervoor', value: null }];
  public notificationOptions = [{ label: 'Trillen', value: null }];
  public watchOptions = [{ label: 'Analoge', value: null }];

  constructor() {}

  ngOnInit() {}
}
