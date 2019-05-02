import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Patient } from './../patient/patient.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  title = 'pillassist';
  public isCalendarVisible = true;
  public isAddPillVisible: boolean;
  public patient: Patient;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const url = params.get('name');
      const name = this.prettify(url);
      this.patient = {
        name: name,
        url: url
      };
    });
  }

  public prettify(str) {
    return str.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
      return (prep && ' ') + letter.toUpperCase();
    });
  }
}
