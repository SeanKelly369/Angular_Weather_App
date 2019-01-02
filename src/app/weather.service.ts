import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith } from 'rxjs/operators';

import 'rxjs/add/observable/interval';
import { interval } from 'rxjs/observable/interval';

const CURRENT_WEATHER_CACHE_KEY = 'currentWeather';
const FORECAST_WEATHER_CACHE_KEY = 'forecastWeather';
const SUNRISE_SUNSET_CACHE_KEY = 'sunriseSunset';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private appID: string = 'a309658616197fbff90f234ddf47a35d';
  currentLocalWeather: any;
  fiveDayForecast: any;
  geolocationPosition:any;
  private lat:number;
  private lon:number;
  private currentTime = Date.now();
  sunriseSunsetAPI = `https://api.sunrise-sunset.org/json?lat=${this.lat}&lng=${this.lon}&date=${this.currentTime}`;
  currentSunriseSunset:any;

  constructor(private http: HttpClient) {
    this.getGeoLoc();
    this.checkAPI();
  }

  getGeoLoc() {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.geolocationPosition = position,
                    console.log(position);
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;
                this.getCurrentWeather();
                this.getForeCast();
                this.getSunriseSunset();
                console.log(this.lat);
            },
            error => {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            }
        );
    };
  }

  checkAPI() {
    const getAPIInterval = interval(300000); // every five minutes
    getAPIInterval.subscribe(val => this.getForeCast());
    getAPIInterval.subscribe(val => this.getCurrentWeather());
  }

  getSunriseSunset() {
    this.currentSunriseSunset = this.http.get<any>(`https://api.sunrise-sunset.org/json?lat=${this.lat}&lng=${this.lon}&date=${this.currentTime}`)
    .pipe(
      map(data => data)
    );

    this.currentSunriseSunset.subscribe(next => {
      localStorage[SUNRISE_SUNSET_CACHE_KEY] = JSON.stringify(next);
    });

    this.currentSunriseSunset = this.currentLocalWeather.pipe(
      startWith(JSON.parse(localStorage[SUNRISE_SUNSET_CACHE_KEY] || '[]'))
    )
  }

  getCurrentWeather() {
    this.currentLocalWeather = this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&APPID=${this.appID}`)
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
    this.fiveDayForecast = this.http.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&APPID=${this.appID}`)
      .pipe(
        map(data => data)
      );
    this.fiveDayForecast.subscribe(next => {
      localStorage[FORECAST_WEATHER_CACHE_KEY] = JSON.stringify(next);
    });

    this.fiveDayForecast = this.fiveDayForecast.pipe(
      startWith(JSON.parse(localStorage[FORECAST_WEATHER_CACHE_KEY] || '[]'))
    )
    console.log("checking")
  }
}