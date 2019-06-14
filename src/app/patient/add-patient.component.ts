import {
  Component,
  EventEmitter,
  OnInit,
  Output
  } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators
  } from '@angular/forms';
import { Patient } from '../shared/patient.model';
import { PatientService } from './../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styles: []
})
export class AddPatientComponent implements OnInit {
  public addPatientForm: FormGroup;
  public patient = new Patient();
  public isLoading = false;

  @Output() patientAdded = new EventEmitter();
  @Output() closeEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addPatientForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      tel: [''],
      street: [''],
      city: ['']
    });
  }

  get firstName() {
    return this.addPatientForm.get('firstName');
  }

  get lastName() {
    return this.addPatientForm.get('lastName');
  }

  get email() {
    return this.addPatientForm.get('email');
  }

  get tel() {
    return this.addPatientForm.get('tel');
  }

  get street() {
    return this.addPatientForm.get('street');
  }

  get city() {
    return this.addPatientForm.get('city');
  }

  createPatient(form) {
    this.patient = {
      id: undefined,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      tel: form.tel,
      street: form.street,
      city: form.city
    };

    this.isLoading = true;

    this.patientService.createPatient(this.patient).subscribe(
      () => {
        this.isLoading = false;
        this.patientAdded.emit();
        this.closeModal();
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  closeModal() {
    this.closeEvent.emit();
  }
}
