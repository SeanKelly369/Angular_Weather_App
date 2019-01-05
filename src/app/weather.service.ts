import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith } from 'rxjs/operators';

import 'rxjs/add/observable/interval';
import { interval } from 'rxjs/observable/interval';

const CURRENT_WEATHER_CACHE_KEY = 'currentWeather';
const FORECAST_WEATHER_CACHE_KEY = 'forecastWeather';

const SUNRISE_SUNSET_TODAY_CACHE_KEY = 'sunriseSunsetToday';
const SUNRISE_SUNSET_TOMORROW_CACHE_KEY = 'sunriseSunsetTomorrow';
const SUNRISE_SUNSET_PLUS2_CACHE_KEY = 'sunriseSunsetPlus2days';
const SUNRISE_SUNSET_PLUS3_CACHE_KEY = 'sunriseSunsetPlus3days';
const SUNRISE_SUNSET_PLUS4_CACHE_KEY = 'sunriseSunsetPlus4days';
const SUNRISE_SUNSET_PLUS5_CACHE_KEY = 'sunriseSunsetPlus5days';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private appID: string = 'a309658616197fbff90f234ddf47a35d';
  currentLocalWeather: any;
  fiveDayForecast: any;
  sunriseSunset:any;
  sunriseSunset2:any;
  sunriseSunset3:any;
  sunriseSunset4:any;
  sunriseSunset5:any;
  sunriseSunset6:any;
  geolocationPosition:any;
  private lat:number;
  private lon:number;

  private currentTime = new Date();
  private currentTimeFormatted = this.currentTime.getFullYear() + this.currentTime.getMonth() + this.currentTime.getDate();
  private currentTimeNum = (this.currentTime).getTime();
  private tomorrow = (new Date(this.currentTimeNum + 172800000)).toLocaleDateString();
  private plus2Days = (new Date(this.currentTimeNum + (172800000 * 2))).toLocaleDateString();
  private plus3Days = (new Date(this.currentTimeNum + (172800000 * 3))).toLocaleDateString();
  private plus4Days = (new Date(this.currentTimeNum + (172800000 * 4))).toLocaleDateString();
  private plus5Days = (new Date(this.currentTimeNum + (172800000 * 4) + 50400000)).toLocaleDateString();
  asyncResult:any;

  currentSunriseSunsetToday:any;
  currentSunriseSunsetPlusOne:any;
  currentSunriseSunsetPlusTwo:any;
  currentSunriseSunsetPlusThree:any;
  currentSunriseSunsetPlusFour:any;
  currentSunriseSunsetPlusFive:any;

  constructor(private http: HttpClient) {
    this.getGeoLoc();
    this.checkAPI();
    this.getSunriseSunset();
    this.getSunriseSunsetTomorrow();
    this.getSunriseSunsetDay2();
    this.getSunriseSunsetDay3();
    this.getSunriseSunsetDay4();
    this.getSunriseSunsetDay5();
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
                return this.geolocationPosition;
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
    this.getGeoLoc();
    console.log("tomorrow is " + this.tomorrow);
      
    setTimeout(() => {
      
      this.currentSunriseSunsetToday = this.http.get<any>(`https://api.sunrise-sunset.org/json?lat=${this.geolocationPosition.coords.latitude}&lng=${this.geolocationPosition.coords.longitude}&date=${this.currentTimeFormatted}`)
      .pipe(
        map(data => data)
      );

      this.currentSunriseSunsetToday.subscribe(next => {
        localStorage[SUNRISE_SUNSET_TODAY_CACHE_KEY] = JSON.stringify(next);
      });

      this.currentSunriseSunsetToday = this.currentLocalWeather.pipe(
        startWith(JSON.parse(localStorage[SUNRISE_SUNSET_TODAY_CACHE_KEY] || '[]'))
      )
    }, 4000);
  }

  getSunriseSunsetTomorrow() {

    this.getGeoLoc();
    setTimeout(() => {

      this.currentSunriseSunsetPlusOne = this.http.get<any>(`https://api.sunrise-sunset.org/json?lat=${this.geolocationPosition.coords.latitude}&lng=${this.geolocationPosition.coords.longitude}&date=${this.tomorrow}`)
      .pipe(
        map(data2 => data2)
      );

      this.currentSunriseSunsetPlusOne.subscribe(next => {
        localStorage[SUNRISE_SUNSET_TOMORROW_CACHE_KEY] = JSON.stringify(next);
      });

      this.currentSunriseSunsetPlusOne = this.currentLocalWeather.pipe(
        startWith(JSON.parse(localStorage[SUNRISE_SUNSET_TOMORROW_CACHE_KEY] || '[]'))
      )
    }, 4000);
  }


  getSunriseSunsetDay2() {

    this.getGeoLoc();
    setTimeout(() => {

      this.currentSunriseSunsetPlusTwo = this.http.get<any>(`https://api.sunrise-sunset.org/json?lat=${this.geolocationPosition.coords.latitude}&lng=${this.geolocationPosition.coords.longitude}&date=${this.plus2Days}`)
      .pipe(
        map(data3 => data3)
      );

      this.currentSunriseSunsetPlusTwo.subscribe(next => {
        localStorage[SUNRISE_SUNSET_PLUS2_CACHE_KEY] = JSON.stringify(next);
      });

      this.currentSunriseSunsetPlusTwo = this.currentLocalWeather.pipe(
        startWith(JSON.parse(localStorage[SUNRISE_SUNSET_PLUS2_CACHE_KEY] || '[]'))
      )
    }, 4000);
  }


  getSunriseSunsetDay3() {

    this.getGeoLoc();
    setTimeout(() => {

      this.currentSunriseSunsetPlusThree = this.http.get<any>(`https://api.sunrise-sunset.org/json?lat=${this.geolocationPosition.coords.latitude}&lng=${this.geolocationPosition.coords.longitude}&date=${this.plus3Days}`)
      .pipe(
        map(data => data)
      );

      this.currentSunriseSunsetPlusThree.subscribe(next => {
        localStorage[SUNRISE_SUNSET_PLUS3_CACHE_KEY] = JSON.stringify(next);
      });

      this.currentSunriseSunsetPlusThree = this.currentLocalWeather.pipe(
        startWith(JSON.parse(localStorage[SUNRISE_SUNSET_PLUS3_CACHE_KEY] || '[]'))
      )
    }, 4000);
  }

  getSunriseSunsetDay4() {

    this.getGeoLoc();
    setTimeout(() => {

      this.currentSunriseSunsetPlusFour = this.http.get<any>(`https://api.sunrise-sunset.org/json?lat=${this.geolocationPosition.coords.latitude}&lng=${this.geolocationPosition.coords.longitude}&date=${this.plus4Days}`)
      .pipe(
        map(data => data)
      );

      this.currentSunriseSunsetPlusFour.subscribe(next => {
        localStorage[SUNRISE_SUNSET_PLUS4_CACHE_KEY] = JSON.stringify(next);
      });

      this.currentSunriseSunsetPlusFour = this.currentLocalWeather.pipe(
        startWith(JSON.parse(localStorage[SUNRISE_SUNSET_PLUS4_CACHE_KEY] || '[]'))
      )
    }, 4000);
  }


  getSunriseSunsetDay5() {

    this.getGeoLoc();
    setTimeout(() => {

      this.currentSunriseSunsetPlusFive = this.http.get<any>(`https://api.sunrise-sunset.org/json?lat=${this.geolocationPosition.coords.latitude}&lng=${this.geolocationPosition.coords.longitude}&date=${this.plus5Days}`)
      .pipe(
        map(data => data)
      );

      this.currentSunriseSunsetPlusFive.subscribe(next => {
        localStorage[SUNRISE_SUNSET_PLUS5_CACHE_KEY] = JSON.stringify(next);
      });

      this.currentSunriseSunsetPlusFive = this.currentLocalWeather.pipe(
        startWith(JSON.parse(localStorage[SUNRISE_SUNSET_PLUS5_CACHE_KEY] || '[]'))
      )
    }, 4000);
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