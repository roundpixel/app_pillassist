import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  public isAddPillVisible: boolean;

  @Input() patient: Patient;
  public _patient: Patient;

  constructor() {}

  ngOnInit() {}
}
