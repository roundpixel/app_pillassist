import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWeekOverviewComponent } from './calendar-week-overview.component';

describe('CalendarWeekOverviewComponent', () => {
  let component: CalendarWeekOverviewComponent;
  let fixture: ComponentFixture<CalendarWeekOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarWeekOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarWeekOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
