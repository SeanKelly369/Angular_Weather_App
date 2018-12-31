import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-table-switch-day6',
  templateUrl: './weather-table-switch-day6.component.html',
  styleUrls: ['./weather-table-switch-day6.component.scss']
})
export class WeatherTableSwitchDay6Component extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService)     {
    super(_weatherService);
 
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
