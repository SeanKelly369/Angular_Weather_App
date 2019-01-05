import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableSwitchDay6Component } from './weather-table-switch-day6.component';

describe('WeatherTableSwitchDay6Component', () => {
  let component: WeatherTableSwitchDay6Component;
  let fixture: ComponentFixture<WeatherTableSwitchDay6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchDay6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchDay6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
