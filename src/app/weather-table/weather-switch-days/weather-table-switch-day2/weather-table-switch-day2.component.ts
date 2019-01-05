import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-table-switch-day2',
  templateUrl: './weather-table-switch-day2.component.html',
  styleUrls: ['./weather-table-switch-day2.component.scss']
})
export class WeatherTableSwitchDay2Component extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService)     {
    super(_weatherService);
 
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
