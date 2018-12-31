import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-table-switch-day4',
  templateUrl: './weather-table-switch-day4.component.html',
  styleUrls: ['./weather-table-switch-day4.component.scss']
})
export class WeatherTableSwitchDay4Component extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService)     {
    super(_weatherService);
 
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
