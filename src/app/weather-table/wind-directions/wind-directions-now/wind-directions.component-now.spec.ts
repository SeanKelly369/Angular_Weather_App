import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsComponentNow } from './wind-directions.component-now';

describe('WindDirectionsComponentNow', () => {
  let component: WindDirectionsComponentNow;
  let fixture: ComponentFixture<WindDirectionsComponentNow>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirectionsComponentNow ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirectionsComponentNow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
