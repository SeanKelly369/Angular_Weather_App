import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsComponentDay5 } from './wind-directions.component-day5';

describe('WindDirectionsComponentDay5', () => {
  let component: WindDirectionsComponentDay5;
  let fixture: ComponentFixture<WindDirectionsComponentDay5>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirectionsComponentDay5 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirectionsComponentDay5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
