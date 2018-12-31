import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-table-switch-three-hrs',
  templateUrl: './weather-table-switch-three-hrs.component.html',
  styleUrls: ['./weather-table-switch-three-hrs.component.scss']
})
export class WeatherTableSwitchThreeHrsComponent extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService)     {
    super(_weatherService);
 
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
