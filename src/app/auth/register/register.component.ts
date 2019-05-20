import { AuthService } from './../auth.service';
import { Caregiver } from './../../shared/caregiver.model';
import { CaregiverService } from './../../services/caregiver.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  caregiver = new Caregiver('', '', '', '', '');
  error: string;

  constructor(
    private caregiverService: CaregiverService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  createCaregiver(form: NgForm) {
    this.caregiver = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password
    };
    this.caregiverService.create(this.caregiver).subscribe(
      (res: Caregiver[]) => {
        console.log(res);
        this.authService
          .login(this.caregiver['email'], this.caregiver['password'])
          .subscribe(
            () => {
              if (this.authService.isLoggedIn()) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                const redirect = this.authService.redirectUrl
                  ? this.router.parseUrl(this.authService.redirectUrl)
                  : '/';

                // Redirect the user
                this.router.navigateByUrl(redirect);
              }
            },
            error => console.log(error)
          );
        form.reset();
      },
      err => ((this.error = err), console.log(err))
    );
  }
}
