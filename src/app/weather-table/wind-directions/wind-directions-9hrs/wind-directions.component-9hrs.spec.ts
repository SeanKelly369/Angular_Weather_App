import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsComponent9Hrs } from './wind-directions.component-9hrs';

describe('WindDirectionsComponent9Hrs', () => {
  let component: WindDirectionsComponent9Hrs;
  let fixture: ComponentFixture<WindDirectionsComponent9Hrs>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirectionsComponent9Hrs ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirectionsComponent9Hrs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
