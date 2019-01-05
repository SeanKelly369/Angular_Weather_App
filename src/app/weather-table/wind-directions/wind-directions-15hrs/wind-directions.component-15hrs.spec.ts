import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsComponent15Hrs } from './wind-directions.component-15hrs';

describe('WindDirectionsComponent15Hrs', () => {
  let component: WindDirectionsComponent15Hrs;
  let fixture: ComponentFixture<WindDirectionsComponent15Hrs>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirectionsComponent15Hrs ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirectionsComponent15Hrs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
