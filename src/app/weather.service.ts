import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith } from 'rxjs/operators';

import 'rxjs/add/observable/interval';
import { interval } from 'rxjs/observable/interval';
import { formatDate } from '@angular/common';

const CURRENT_WEATHER_CACHE_KEY = 'currentWeather';
const FORECAST_WEATHER_CACHE_KEY = 'forecastWeather';

const SUNRISE_SUNSET_TODAY_CACHE_KEY = 'sunriseSunsetToday';
const SUNRISE_SUNSET_TOMORROW_CACHE_KEY = 'sunriseSunsetTomorrow';
const SUNRISE_SUNSET_PLUS2_CACHE_KEY = 'sunriseSunsetPlus2days';
const SUNRISE_SUNSET_PLUS3_CACHE_KEY = 'sunriseSunset_plus3days';
const SUNRISE_SUNSET_PLUS4_CACHE_KEY = 'sunriseSunset_plus4days';
const SUNRISE_SUNSET_PLUS5_CACHE_KEY = 'sunriseSunset_plus5days';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private appID: string = 'a309658616197fbff90f234ddf47a35d';
  currentLocalWeather: any;
  fiveDayForecast: any;
  sunriseSunset:any;
  geolocationPosition:any;
  private lat:number;
  private lon:number;
  private date = new Date();
  private currentTime = Date.now();
  private tomorrow = (Date.now()) + 86400000;
  // private tomorrow = (Date.now()) + 172800000;
  private plus2Days = (Date.now()) + 172800000;
  private plus3Days = (Date.now()) + (86400000 * 3);
  private plus4Days = (Date.now()) + (86400000 * 4);
  private plus5Days = (Date.now()) + (86400000 * 5);

  currentSunriseSunsetToday:any;
  currentSunriseSunsetPlusOne:any;
  currentSunriseSunsetPlusTwo:any;
  currentSunriseSunsetPlusThree:any;
  currentSunriseSunsetPlusFour:any;
  currentSunriseSunsetPlusFive:any;

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
                setTimeout(() => 
                  this.getSunriseSunset()
                , 1000);
                setTimeout(() => 
                  this.getSunriseSunsetTomorrow()
                , 1000);

                setTimeout(() => 
                  this.getSunriseSunset()
                , 2500);
                setTimeout(() => 
                  this.getSunriseSunsetTomorrow()
                , 2500);

                setTimeout(() => 
                  this.getSunriseSunset()
                , 5000);
                setTimeout(() => 
                  this.getSunriseSunsetTomorrow()
                , 5000);

                setTimeout(() => 
                  this.getSunriseSunset()
                , 15000);
                setTimeout(() => 
                  this.getSunriseSunsetTomorrow()
                , 15000);


                // this.getSunriseSunsetDay2();
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
    // Sunrise and sunset today
    this.currentSunriseSunsetToday = this.http.get<any>(`https://api.sunrise-sunset.org/json?lat=${this.lat}&lng=${this.lon}&date=${this.currentTime}`)
    .pipe(
      map(data => data)
    );

    this.currentSunriseSunsetToday.subscribe(next => {
      localStorage[SUNRISE_SUNSET_TODAY_CACHE_KEY] = JSON.stringify(next);
    });

    this.currentSunriseSunsetToday = this.currentLocalWeather.pipe(
      startWith(JSON.parse(localStorage[SUNRISE_SUNSET_TODAY_CACHE_KEY] || '[]'))
    )
  }

  getSunriseSunsetTomorrow() {
    // Sunrise and sunset tomorrow
    this.currentSunriseSunsetPlusOne = this.http.get<any>(`https://api.sunrise-sunset.org/json?lat=${this.lat}&lng=${this.lon}&date=${this.tomorrow}`)
    .pipe(
      map(data2 => data2)
    );

    this.currentSunriseSunsetPlusOne.subscribe(next => {
      localStorage[SUNRISE_SUNSET_TOMORROW_CACHE_KEY] = JSON.stringify(next);
    });

    this.currentSunriseSunsetPlusOne = this.currentLocalWeather.pipe(
      startWith(JSON.parse(localStorage[SUNRISE_SUNSET_TOMORROW_CACHE_KEY] || '[]'))
    )
  }

  // getSunriseSunsetDay2() {
  //   // Sunrise and sunset plus 2 days 
  //   this.currentSunriseSunsetPlusTwo = this.http.get<any>(`https://api.sunrise-sunset.org/json?lat=${this.lat}&lng=${this.lon}&date=${this.currentTime}`)
  //   .pipe(
  //     map(data3 => data3)
  //   );

  //   this.currentSunriseSunsetPlusTwo.subscribe(next => {
  //     localStorage[SUNRISE_SUNSET_PLUS2_CACHE_KEY] = JSON.stringify(next);
  //   });

  //   this.currentSunriseSunsetPlusTwo = this.currentLocalWeather.pipe(
  //     startWith(JSON.parse(localStorage[SUNRISE_SUNSET_PLUS2_CACHE_KEY] || '[]'))
  //   )
  // }



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