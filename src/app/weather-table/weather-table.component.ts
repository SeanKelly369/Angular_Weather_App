import { Component, OnInit, OnChanges } from '@angular/core';

import { WeatherService } from '../weather.service';
import { interval } from 'rxjs/observable/interval';
import {Observable,of, from } from 'rxjs';


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
  sunRise2:any;
  sunRise3:any;
  sunRise4:any;
  sunRise5:any;
  sunRise6:any;
  flag: boolean;
  test: string = "testing";
  geolocationPosition:any;
  // values = Observable.interval(1000).take(5);

  constructor(private _weatherService: WeatherService) {
    this.updateTime();
    // this.getLocalAPIs();
  }

  ngOnChanges() {
    this.ngOnInit();
    console.log("changes caught");
  }

  getLocalAPIs() {
    // Using a hack job to solve the issue with the API passing data to local storage after the DOM gets populated with null data
    let y = '';
    let t = '';
    let s = '';
    let s2 = '';
    let s3 = '';
    let s4 = '';
    let s5 = '';
    let s6 = '';

    setTimeout(() => (this._weatherService.currentLocalWeather,
      t = localStorage.getItem("currentWeather"),
      this.currentWeather = JSON.parse(t),
      // console.log("interval called"),

      this._weatherService.fiveDayForecast,
      y = localStorage.getItem("forecastWeather"),
      this.fiveDayForecast = JSON.parse(y),

      this._weatherService.sunriseSunset,
      s = localStorage.getItem("sunriseSunsetToday"),
      this.sunRise = JSON.parse(s),
      
      this._weatherService.sunriseSunset2,
      s2 = localStorage.getItem("sunriseSunsetTomorrow"),
      this.sunRise2 = JSON.parse(s2),
      
      this._weatherService.sunriseSunset3,
      s3 = localStorage.getItem("sunriseSunsetPlus2days"),
      this.sunRise3 = JSON.parse(s3),

      this._weatherService.sunriseSunset4,
      s4 = localStorage.getItem("sunriseSunsetPlus3days"),
      this.sunRise4 = JSON.parse(s4),
      
      this._weatherService.sunriseSunset5,
      s5 = localStorage.getItem("sunriseSunsetPlus4days"),
      this.sunRise5 = JSON.parse(s5),

      this._weatherService.sunriseSunset6,
      s6 = localStorage.getItem("sunriseSunsetPlus5days"),
      this.sunRise6 = JSON.parse(s6))
      , 4000);

      setInterval(() => (this._weatherService.currentLocalWeather,
        t = localStorage.getItem("currentWeather"),
        this.currentWeather = JSON.parse(t),
        // console.log("interval called"),
  
        this._weatherService.fiveDayForecast,
        y = localStorage.getItem("forecastWeather"),
        this.fiveDayForecast = JSON.parse(y),

        this._weatherService.sunriseSunset,
        s = localStorage.getItem("sunriseSunsetToday"),
        this.sunRise = JSON.parse(s),
        
        this._weatherService.sunriseSunset2,
        s2 = localStorage.getItem("sunriseSunsetTomorrow"),
        this.sunRise2 = JSON.parse(s2),
        
        this._weatherService.sunriseSunset3,
        s3 = localStorage.getItem("sunriseSunsetPlus2days"),
        this.sunRise3 = JSON.parse(s3),
  
        this._weatherService.sunriseSunset4,
        s4 = localStorage.getItem("sunriseSunsetPlus3days"),
        this.sunRise4 = JSON.parse(s4),
        
        this._weatherService.sunriseSunset5,
        s5 = localStorage.getItem("sunriseSunsetPlus4days"),
        this.sunRise5 = JSON.parse(s5),
  
        this._weatherService.sunriseSunset6,
        s6 = localStorage.getItem("sunriseSunsetPlus5days"),
        this.sunRise6 = JSON.parse(s6))
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

  ngOnInit() {
    // Using a hack job to solve the issue with the API passing data to local storage after the DOM gets populated with null data
    let y = '';
    let t = '';
    let s = '';
    let s2 = '';
    let s3 = '';
    let s4 = '';
    let s5 = '';
    let s6 = '';

    setTimeout(() => (this._weatherService.currentLocalWeather,
      t = localStorage.getItem("currentWeather"),
      this.currentWeather = JSON.parse(t),
      // console.log("interval called"),

      this._weatherService.fiveDayForecast,
      y = localStorage.getItem("forecastWeather"),
      this.fiveDayForecast = JSON.parse(y),
      
      this._weatherService.sunriseSunset,
      s = localStorage.getItem("sunriseSunsetToday"),
      this.sunRise = JSON.parse(s),
      
      this._weatherService.sunriseSunset,
      s2 = localStorage.getItem("sunriseSunsetTomorrow"),
      this.sunRise2 = JSON.parse(s2),
      
      this._weatherService.sunriseSunset3,
      s3 = localStorage.getItem("sunriseSunsetPlus2days"),
      this.sunRise3 = JSON.parse(s3),

      this._weatherService.sunriseSunset4,
      s4 = localStorage.getItem("sunriseSunsetPlus3days"),
      this.sunRise4 = JSON.parse(s4),
      
      this._weatherService.sunriseSunset5,
      s5 = localStorage.getItem("sunriseSunsetPlus4days"),
      this.sunRise5 = JSON.parse(s5),

      this._weatherService.sunriseSunset6,
      s6 = localStorage.getItem("sunriseSunsetPlus5days"),
      this.sunRise6 = JSON.parse(s6))
      
      , 3000);

      setInterval(() => (this._weatherService.currentLocalWeather,
        t = localStorage.getItem("currentWeather"),
        this.currentWeather = JSON.parse(t),
        // console.log("interval called"),
  
        this._weatherService.fiveDayForecast,
        y = localStorage.getItem("forecastWeather"),
        this.fiveDayForecast = JSON.parse(y),

        this._weatherService.sunriseSunset,
        s = localStorage.getItem("sunriseSunsetToday"),
        this.sunRise = JSON.parse(s),
        
        this._weatherService.sunriseSunset2,
        s2 = localStorage.getItem("sunriseSunsetTomorrow"),
        this.sunRise2 = JSON.parse(s2),

        this._weatherService.sunriseSunset3,
        s3 = localStorage.getItem("sunriseSunsetPlus2days"),
        this.sunRise3 = JSON.parse(s3),
  
        this._weatherService.sunriseSunset4,
        s4 = localStorage.getItem("sunriseSunsetPlus3days"),
        this.sunRise4 = JSON.parse(s4),
        
        this._weatherService.sunriseSunset5,
        s5 = localStorage.getItem("sunriseSunsetPlus4days"),
        this.sunRise5 = JSON.parse(s5),
  
        this._weatherService.sunriseSunset6,
        s6 = localStorage.getItem("sunriseSunsetPlus5days"),
        this.sunRise6 = JSON.parse(s6))
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

    this._weatherService.sunriseSunset,
    s = localStorage.getItem("sunriseSunsetToday"),
    this.sunRise = JSON.parse(s);

    this._weatherService.sunriseSunset2,
    s2 = localStorage.getItem("sunriseSunsetTomorrow"),
    this.sunRise2 = JSON.parse(s2);

    this._weatherService.sunriseSunset3,
    s3 = localStorage.getItem("sunriseSunsetPlus2days"),
    this.sunRise3 = JSON.parse(s3);

    this._weatherService.sunriseSunset4,
    s4 = localStorage.getItem("sunriseSunsetPlus3days"),
    this.sunRise4 = JSON.parse(s4);
    
    this._weatherService.sunriseSunset5,
    s5 = localStorage.getItem("sunriseSunsetPlus4days"),
    this.sunRise5 = JSON.parse(s5);

    this._weatherService.sunriseSunset6,
    s6 = localStorage.getItem("sunriseSunsetPlus5days"),
    this.sunRise6 = JSON.parse(s6);
  }

  updateTime() {
    const getAPIInterval = interval(60000);
    // console.log("updating time");
    getAPIInterval.subscribe(val => this.currentTime = Date.now());
  }
}

