import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { StorageServiceModule } from ‘angular-webstorage-service’;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { WeatherNewsComponent } from './weather-news/weather-news.component';
import { WeatherTableComponent } from './weather-table/weather-table.component';

import { WeatherService } from './weather.service';
import { WeatherTableSwitchComponent } from './weather-table/weather-table-switch/weather-table-switch.component';
// import { LocalStorageService } from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WeatherNewsComponent,
    WeatherTableComponent,
    WeatherTableSwitchComponent
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
