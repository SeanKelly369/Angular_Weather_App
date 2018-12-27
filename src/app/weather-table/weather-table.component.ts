import { Component, OnInit, Input } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss'],
  providers: []
})
export class WeatherTableComponent implements OnInit {

  private weatherData2: any = '';

  @Input() weatherAPIData: WeatherTableComponent;

  constructor( private _weatherService: WeatherService ) {}

  ngOnInit() {
    this.weatherData2 = this._weatherService.getTemp(); 
  }

  getCurrentTemp() {
    this._weatherService.getTemp(); 
  }

  findCurrentForecast() {
    this._weatherService.getForeCast(); 
  }

}
