import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableSwitchComponent } from './weather-table-switch.component';

describe('WeatherTableSwitchComponent', () => {
  let component: WeatherTableSwitchComponent;
  let fixture: ComponentFixture<WeatherTableSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
