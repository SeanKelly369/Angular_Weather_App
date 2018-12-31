import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { WeatherNewsComponent } from './weather-news/weather-news.component';
import { WeatherTableComponent } from './weather-table/weather-table.component';

import { WeatherService } from './weather.service';
import { WeatherTableSwitchNowComponent } from './weather-table/weather-table-switch-now/weather-table-switch-now.component';
import { WeatherTableSwitchThreeHrsComponent } from './weather-table/weather-table-switch-three-hrs/weather-table-switch-three-hrs.component';
import { WeatherTableSwitchNineHrsComponent } from './weather-table/weather-table-switch-nine-hrs/weather-table-switch-nine-hrs.component';
import { WeatherTableSwitchFifteenHrsComponent } from './weather-table/weather-table-switch-fifteen-hrs/weather-table-switch-fifteen-hrs.component';
import { WeatherTableSwitchDay2Component } from './weather-table/weather-table-switch-day2/weather-table-switch-day2.component';
import { WeatherTableSwitchDay3Component } from './weather-table/weather-table-switch-day3/weather-table-switch-day3.component';
import { WeatherTableSwitchDay4Component } from './weather-table/weather-table-switch-day4/weather-table-switch-day4.component';
import { WeatherTableSwitchDay5Component } from './weather-table/weather-table-switch-day5/weather-table-switch-day5.component';
import { WeatherTableSwitchDay6Component } from './weather-table/weather-table-switch-day6/weather-table-switch-day6.component';

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
    WeatherTableSwitchDay6Component
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
