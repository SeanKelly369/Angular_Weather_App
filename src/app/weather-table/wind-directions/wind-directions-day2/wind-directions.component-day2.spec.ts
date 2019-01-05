import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsComponentDay2 } from './wind-directions.component-day2';

describe('WindDirectionsComponentDay2', () => {
  let component: WindDirectionsComponentDay2;
  let fixture: ComponentFixture<WindDirectionsComponentDay2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirectionsComponentDay2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirectionsComponentDay2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
