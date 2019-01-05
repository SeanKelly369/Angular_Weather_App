import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsComponentDay3 } from './wind-directions.component-day3';

describe('WindDirectionsComponentDay3', () => {
  let component: WindDirectionsComponentDay3;
  let fixture: ComponentFixture<WindDirectionsComponentDay3>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirectionsComponentDay3 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirectionsComponentDay3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
