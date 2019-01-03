import { Component, OnInit, OnChanges } from '@angular/core';

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

export class WeatherTableComponent implements OnChanges, OnInit {

  currentTime = Date.now();
  fiveDayForecast: any;
  currentWeather: any = {};
  sunRise:any;
  flag: boolean;
  test: string = "testing";
  geolocationPosition:any;

  constructor(private _weatherService: WeatherService) {
    this.updateTime();
  }

  ngOnChanges() {
    this.ngOnInit();
    console.log("changes caught");
  }

  ngOnInit() {
    // Using a hack job to solve the issue with the API passing data to local storage after the DOM gets populated with null data
    let y = '';
    let t = '';
    let s = '';

    setTimeout(() => (this._weatherService.currentLocalWeather,
      t = localStorage.getItem("currentWeather"),
      this.currentWeather = JSON.parse(t),
      // console.log("interval called"),

      this._weatherService.fiveDayForecast,
      y = localStorage.getItem("forecastWeather"),
      this.fiveDayForecast = JSON.parse(y),

      this._weatherService.sunriseSunset,
      s = localStorage.getItem("sunriseSunsetToday"),
      this.sunRise = JSON.parse(s))
      , 1000);

      setInterval(() => (this._weatherService.currentLocalWeather,
        t = localStorage.getItem("currentWeather"),
        this.currentWeather = JSON.parse(t),
        // console.log("interval called"),
  
        this._weatherService.fiveDayForecast,
        y = localStorage.getItem("forecastWeather"),
        this.fiveDayForecast = JSON.parse(y))
        , 7500);  

        setInterval(() => (this._weatherService.currentLocalWeather,
          t = localStorage.getItem("currentWeather"),
          this.currentWeather = JSON.parse(t),
          // console.log("interval called"),
    
          this._weatherService.fiveDayForecast,
          y = localStorage.getItem("forecastWeather"),
          this.fiveDayForecast = JSON.parse(y))
          , 24000);  

    this._weatherService.currentLocalWeather;
    t = localStorage.getItem("currentWeather");
    this.currentWeather = JSON.parse(t);

    this._weatherService.fiveDayForecast;
    y = localStorage.getItem("forecastWeather");
    this.fiveDayForecast = JSON.parse(y);
    // console.log(this.fiveDayForecast)
  }

  updateTime() {
    const getAPIInterval = interval(60000);
    // console.log("updating time");
    getAPIInterval.subscribe(val => this.currentTime = Date.now());
  }
}

