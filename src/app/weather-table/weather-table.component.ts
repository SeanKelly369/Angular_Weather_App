import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import { interval } from 'rxjs/observable/interval';

const CURRENT_WEATHER_CACHE_KEY = 'currentWeather';
const FORECAST_WEATHER_CACHE_KEY = 'forecastWeather';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss'],
  providers: []
})

export class WeatherTableComponent implements OnInit {

  currentTime = Date.now();
  fiveDayForecast: any;
  currentWeather: any = {};
  flag: boolean;
  test: string = "testing";

  constructor(private _weatherService: WeatherService) {
    this.updateTime();
  }
  ngOnInit() {
    // Using a hack job to solve the issue with the API passing data to local storage after the DOM gets populated with null data
    let y = '';
    let t = '';

    setTimeout(() => (this._weatherService.currentLocalWeather,
      t = localStorage.getItem("currentWeather"),
      this.currentWeather = JSON.parse(t),
      console.log("interval called"),

      this._weatherService.fiveDayForecast,
      y = localStorage.getItem("forecastWeather"),
      this.fiveDayForecast = JSON.parse(y))
      , 750);

    this._weatherService.currentLocalWeather;
    t = localStorage.getItem("currentWeather");
    this.currentWeather = JSON.parse(t);

    this._weatherService.fiveDayForecast;
    y = localStorage.getItem("forecastWeather");
    this.fiveDayForecast = JSON.parse(y);
    console.log(this.fiveDayForecast)
  }

  updateTime() {
    const getAPIInterval = interval(60000);
    console.log("updating time");
    getAPIInterval.subscribe(val => this.currentTime = Date.now());
  }
}