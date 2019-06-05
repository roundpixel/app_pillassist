import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileCardComponent } from './patient-profile-card.component';

describe('PatientProfileCardComponent', () => {
  let component: PatientProfileCardComponent;
  let fixture: ComponentFixture<PatientProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
