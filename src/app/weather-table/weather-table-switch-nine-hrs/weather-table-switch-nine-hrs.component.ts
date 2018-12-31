import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-table-switch-nine-hrs',
  templateUrl: './weather-table-switch-nine-hrs.component.html',
  styleUrls: ['./weather-table-switch-nine-hrs.component.scss']
})
export class WeatherTableSwitchNineHrsComponent extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService)     {
    super(_weatherService);
 
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
