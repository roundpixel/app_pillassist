import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public loginError: string;
  public showEmailLabel = false;
  public showPasswordLabel = false;

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.authService.logout();
  }

  public login(form: NgForm) {
    const val = form.value;

    this.loginError = 'Aan het inloggen...';

    this.authService.login(val.email, val.password).subscribe(
      () => {
        if (this.authService.isLoggedIn()) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl
            ? this.router.parseUrl(this.authService.redirectUrl)
            : '/patients';

          // Redirect the user
          this.router.navigateByUrl(redirect).then(() => {});
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
