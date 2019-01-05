import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionsComponent1Hr } from './wind-directions.component-1hr';

describe('WindDirectionsComponent1Hr', () => {
  let component: WindDirectionsComponent1Hr;
  let fixture: ComponentFixture<WindDirectionsComponent1Hr>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDirectionsComponent1Hr ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDirectionsComponent1Hr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
