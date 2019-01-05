import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-table-switch-now',
  templateUrl: './weather-table-switch-now.component.html',
  styleUrls: ['./weather-table-switch-now.component.scss']
})
export class WeatherTableSwitchNowComponent extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService)     {
    super(_weatherService);
 
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
