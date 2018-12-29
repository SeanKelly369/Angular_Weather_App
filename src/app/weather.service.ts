import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


const CURRENT_WEATHER_CACHE_KEY = 'currentWeather';
const FORECAST_WEATHER_CACHE_KEY = 'forecastWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  appID:string = 'a309658616197fbff90f234ddf47a35d';
  currentLocalWeather: any;
  fiveDayForecast: any;

  constructor(private http: HttpClient) {

    this.getTemp();
    this.getForeCast();
  }

  ngOnInit () {
  }

  getTemp() {
    this.currentLocalWeather = this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=Carbury,ie&APPID=${this.appID}`)
    .pipe(
      map(data => data)
    );

    this.currentLocalWeather.subscribe(next => {
        localStorage[CURRENT_WEATHER_CACHE_KEY] = JSON.stringify(next);
    });
    
    this.currentLocalWeather = this.currentLocalWeather.pipe(
      startWith(JSON.parse(localStorage[CURRENT_WEATHER_CACHE_KEY] || '[]'))
    )
  }


  getForeCast() {
    this.fiveDayForecast = this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=Carbury,ie&APPID=${this.appID}`)
    .pipe(
      map(data => data)
    );
      this.fiveDayForecast.subscribe(next => {
        localStorage[FORECAST_WEATHER_CACHE_KEY] = JSON.stringify(next);
    });

    this.fiveDayForecast = this.fiveDayForecast.pipe(
      startWith(JSON.parse(localStorage[FORECAST_WEATHER_CACHE_KEY] || '[]'))
    )
  }
}
