import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/patient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html'
})
export class NavDesktopComponent implements OnInit {
  public patients: Patient[];
  public patientName: string;

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.patients = [
      {
        name: 'Louis Bracke',
        url: 'louis-bracke'
      },
      {
        name: 'John Doe',
        url: 'john-doe'
      },
      {
        name: 'Yvette Van Lankveld',
        url: 'yvette-van-lankveld'
      }
    ];
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
