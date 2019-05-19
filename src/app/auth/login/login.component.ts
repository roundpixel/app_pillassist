import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public isLoading = false;
  public loginError: string;
  public showEmailLabel = false;
  public showPasswordLabel = false;

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.authService.logout();
  }

  public login(form: NgForm) {
    const val = form.value;

    this.isLoading = true;

    this.authService.login(val.email, val.password).subscribe(
      () => {
        this.isLoading = false;
        if (this.authService.isLoggedIn()) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl
            ? this.router.parseUrl(this.authService.redirectUrl)
            : '/';

          // Redirect the user
          this.router.navigateByUrl(redirect);
        } else {
          this.loginError = 'Email en paswoord combinatie bestaat niet.';
        }
      },
      error => (this.loginError = error)
    );
  }

  public checkInput(value, field) {
    if (value !== '') {
      if (field === 'email') {
        this.showEmailLabel = true;
      } else if (field === 'password') {
        this.showPasswordLabel = true;
      }
    } else {
      if (field === 'email') {
        this.showEmailLabel = false;
      } else if (field === 'password') {
        this.showPasswordLabel = false;
      }
    }
  }
}
