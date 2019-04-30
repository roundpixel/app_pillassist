import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDayTomorrowComponent } from './calendar-day-tomorrow.component';

describe('CalendarDayTomorrowComponent', () => {
  let component: CalendarDayTomorrowComponent;
  let fixture: ComponentFixture<CalendarDayTomorrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDayTomorrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDayTomorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
