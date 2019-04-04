import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public isLoading = false;

  constructor(public authService: AuthService, public router: Router) {}

  login() {
    this.isLoading = true;

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.isLoading = false;
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl
          ? this.router.parseUrl(this.authService.redirectUrl)
          : '/';

        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    });
  }
}
