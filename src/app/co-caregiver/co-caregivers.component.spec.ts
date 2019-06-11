import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCaregiversComponent } from './co-caregivers.component';

describe('CoCaregiversComponent', () => {
  let component: CoCaregiversComponent;
  let fixture: ComponentFixture<CoCaregiversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCaregiversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCaregiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
