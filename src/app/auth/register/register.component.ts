import { Caregiver } from './../../shared/caregiver.model';
import { CaregiverService } from './../../services/caregiver.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  caregiver = new Caregiver('', '', '', '');
  error: string;

  constructor(private caregiverService: CaregiverService) {}

  ngOnInit() {}

  createCaregiver(form: NgForm) {
    this.caregiver = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password
    };
    console.log(this.caregiver);
    this.caregiverService.create(this.caregiver).subscribe(
      (res: Caregiver[]) => {
        console.log(res);
        form.reset();
      },
      err => ((this.error = err), console.log(err))
    );
  }
}
