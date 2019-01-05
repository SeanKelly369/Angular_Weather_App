import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { WeatherNewsComponent } from './weather-news/weather-news.component';
import { WeatherTableComponent } from './weather-table/weather-table.component';

import { WeatherService } from './weather.service';
import { WeatherTableSwitchNowComponent } from './weather-table/weather-switch-days/weather-table-switch-now/weather-table-switch-now.component';
import { WeatherTableSwitchThreeHrsComponent } from './weather-table/weather-switch-days/weather-table-switch-three-hrs/weather-table-switch-three-hrs.component';
import { WeatherTableSwitchNineHrsComponent } from './weather-table/weather-switch-days/weather-table-switch-nine-hrs/weather-table-switch-nine-hrs.component';
import { WeatherTableSwitchFifteenHrsComponent } from './weather-table/weather-switch-days/weather-table-switch-fifteen-hrs/weather-table-switch-fifteen-hrs.component';
import { WeatherTableSwitchDay2Component } from './weather-table/weather-switch-days/weather-table-switch-day2/weather-table-switch-day2.component';
import { WeatherTableSwitchDay3Component } from './weather-table/weather-switch-days/weather-table-switch-day3/weather-table-switch-day3.component';
import { WeatherTableSwitchDay4Component } from './weather-table/weather-switch-days/weather-table-switch-day4/weather-table-switch-day4.component';
import { WeatherTableSwitchDay5Component } from './weather-table/weather-switch-days/weather-table-switch-day5/weather-table-switch-day5.component';
import { WeatherTableSwitchDay6Component } from './weather-table/weather-switch-days/weather-table-switch-day6/weather-table-switch-day6.component';
import { WindDirectionsComponentNow } from './weather-table/wind-directions/wind-directions-now/wind-directions.component-now';
import { WindDirectionsComponent1Hr } from './weather-table/wind-directions/wind-directions-1hr/wind-directions.component-1hr';
import { WindDirectionsComponent3Hrs } from './weather-table/wind-directions/wind-directions-3hrs/wind-directions.component-3hrs';
import { WindDirectionsComponent9Hrs } from './weather-table/wind-directions/wind-directions-9hrs/wind-directions.component-9hrs';
import { WindDirectionsComponent15Hrs } from './weather-table/wind-directions/wind-directions-15hrs/wind-directions.component-15hrs';
import { WindDirectionsComponentDay2 } from './weather-table/wind-directions/wind-directions-day2/wind-directions.component-day2';
import { WindDirectionsComponentDay3 } from './weather-table/wind-directions/wind-directions-day3/wind-directions.component-day3';
import { WindDirectionsComponentDay4 } from './weather-table/wind-directions/wind-directions-day4/wind-directions.component-day4';
import { WindDirectionsComponentDay5 } from './weather-table/wind-directions/wind-directions-day5/wind-directions.component-day5';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WeatherNewsComponent,
    WeatherTableComponent,
    WeatherTableSwitchNowComponent,
    WeatherTableSwitchThreeHrsComponent,
    WeatherTableSwitchNineHrsComponent,
    WeatherTableSwitchFifteenHrsComponent,
    WeatherTableSwitchDay2Component,
    WeatherTableSwitchDay3Component,
    WeatherTableSwitchDay4Component,
    WeatherTableSwitchDay5Component,
    WeatherTableSwitchDay6Component,
    WindDirectionsComponentNow,
    WindDirectionsComponent1Hr,
    WindDirectionsComponent3Hrs,
    WindDirectionsComponent9Hrs,
    WindDirectionsComponent15Hrs,
    WindDirectionsComponentDay2,
    WindDirectionsComponentDay3,
    WindDirectionsComponentDay4,
    WindDirectionsComponentDay5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
