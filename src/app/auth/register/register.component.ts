import { Caregiver } from './../../shared/caregiver.model';
import { CaregiverService } from './../../services/caregiver.service';
import { Component, OnInit } from '@angular/core';

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

  createCaregiver() {
    this.caregiverService.create(this.caregiver).subscribe(
      (res: Caregiver[]) => {
        console.log(res);
      },
      err => ((this.error = err), console.log(err))
    );
  }
}
