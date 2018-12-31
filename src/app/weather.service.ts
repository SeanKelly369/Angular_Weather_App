import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith } from 'rxjs/operators';

import 'rxjs/add/observable/interval';
import { interval } from 'rxjs/observable/interval';

const CURRENT_WEATHER_CACHE_KEY = 'currentWeather';
const FORECAST_WEATHER_CACHE_KEY = 'forecastWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  appID: string = 'a309658616197fbff90f234ddf47a35d';
  currentLocalWeather: any;
  fiveDayForecast: any;

  constructor(private http: HttpClient) {

    this.getCurrentWeather();
    this.getForeCast();
    this.checkAPI();
  }

  ngOnInit() {
  }

  checkAPI() {
    const getAPIInterval = interval(300000);
    getAPIInterval.subscribe(val => this.getForeCast());
    getAPIInterval.subscribe(val => this.getCurrentWeather());
  }

  getCurrentWeather() {
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