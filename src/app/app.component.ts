import { ActivatedRoute, Router } from '@angular/router';
import { CaregiverService } from './services/caregiver.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  router: string;

  constructor(public _router: Router) {}
}
