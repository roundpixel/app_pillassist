import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html'
})
export class NavDesktopComponent implements OnInit {
  public patientNames = [];
  public patients = [];

  constructor() {}

  ngOnInit() {
    this.patientNames = ['John Doe', 'Louis Bracke', 'Thomas Harris'];

    this.patientNames.forEach(patientName => {
      // TODO: spaces should also be removed in db
      const patientImg = patientName.replace(/\s/g, '');
      const patient = { name: patientName, img: patientImg, active: false };
      this.patients.push(patient);
    });
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
        console.log(event.target.parentNode);
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
        // TODO
        console.log(event.target.parentNode.parentNode);
    }
  }

  public getAllSiblings(elem) {
    const children = elem.parentNode.childNodes;
    return children;
  }
}
