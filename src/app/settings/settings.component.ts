import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit {
  @Input() patient: Patient;

  public options = [
    { label: '1 minuut ervoor', value: null },
    { label: '5 minuten ervoor', value: null },
    { label: '10 minuten ervoor', value: null },
    { label: '15 minuten ervoor', value: null },
    { label: '30 minuten ervoor', value: null }
  ];
  public notificationOptions = [
    {
      label: 'Trillen',
      value: null
    },
    {
      label: 'Trillen + geluid',
      value: null
    },
    {
      label: 'Geluid',
      value: null
    },
    {
      label: 'Licht',
      value: null
    },
    {
      label: 'Trillen met licht',
      value: null
    }
  ];
  public watchOptions = [
    { label: 'Analoog', value: null },
    { label: 'Digitaal', value: null }
  ];

  constructor() {}

  ngOnInit() {}
}
