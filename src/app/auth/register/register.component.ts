import { AuthService } from './../auth.service';
import { Caregiver } from './../../shared/caregiver.model';
import { CaregiverService } from './../../services/caregiver.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators
  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  caregiver = new Caregiver('', '', '', '', '');
  error: string;
  registerForm: FormGroup;

  constructor(
    private caregiverService: CaregiverService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  createCaregiver(form) {
    this.caregiver = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password
    };
    this.caregiverService.create(this.caregiver).subscribe(
      (res: Caregiver[]) => {
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
        this.registerForm.reset();
      },
      err => ((this.error = err), console.log(err))
    );
  }
}
