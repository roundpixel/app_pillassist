import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html'
})
export class NavDesktopComponent implements OnInit {
  public patients = [];

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.patients = [
      {
        name: 'Louis Bracke',
        img: 'LouisBracke',
        active: true
      },
      {
        name: 'John Doe',
        img: 'JohnDoe',
        active: false
      },
      {
        name: 'Yvette Van Lankveld',
        img: 'LouisBrackeVanLankveld',
        active: false
      }
    ];
  }

  public setActivePatient(event) {
    switch (event.target.tagName) {
      case 'A':
        const sibs = this.getAllSiblings(event.target);
        sibs.forEach(sibling => {
          if (sibling.nodeType === Node.ELEMENT_NODE) {
            sibling.classList.remove('active');
          }
        });

        event.target.classList.add('active');
        break;
      case 'SPAN':
        const parentSibs = this.getAllSiblings(event.target.parentNode);
        parentSibs.forEach(sibling => {
          if (sibling.nodeType === Node.ELEMENT_NODE) {
            sibling.classList.remove('active');
          }
        });
        event.target.parentNode.classList.add('active');
        break;
      case 'DIV':
      case 'IMG':
        const parentParentSibs = this.getAllSiblings(
          event.target.parentNode.parentNode.parentNode
        );
        parentParentSibs.forEach(sibling => {
          if (sibling.nodeType === Node.ELEMENT_NODE) {
            sibling.classList.remove('active');
          }
        });
        event.target.parentNode.parentNode.parentNode.classList.add('active');
        break;
    }
  }

  public getAllSiblings(elem) {
    const children = elem.parentNode.childNodes;
    return children;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
