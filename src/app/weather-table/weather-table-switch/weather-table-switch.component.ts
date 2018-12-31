import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../weather-table.component';
// import { WeatherService } from '../,,/weather.service';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-table-switch',
  templateUrl: './weather-table-switch.component.html',
  styleUrls: ['./weather-table-switch.component.scss']
})
export class WeatherTableSwitchComponent extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService)     {
    super(_weatherService);
 
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
