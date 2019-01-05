import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsComponent3Hrs } from './wind-directions.component-3hrs';

describe('WindDirectionsComponent3Hrs', () => {
  let component: WindDirectionsComponent3Hrs;
  let fixture: ComponentFixture<WindDirectionsComponent3Hrs>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirectionsComponent3Hrs ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirectionsComponent3Hrs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
