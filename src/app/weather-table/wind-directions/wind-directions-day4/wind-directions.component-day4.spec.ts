import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsComponentDay4 } from './wind-directions.component-day4';

describe('WindDirectionsComponentDay4', () => {
  let component: WindDirectionsComponentDay4;
  let fixture: ComponentFixture<WindDirectionsComponentDay4>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirectionsComponentDay4 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirectionsComponentDay4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
