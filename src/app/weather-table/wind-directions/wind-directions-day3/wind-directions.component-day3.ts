import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-wind-directions-day3',
  templateUrl: './wind-directions.component-day3.html',
  styleUrls: ['./wind-directions.component-day3.scss']
})
export class WindDirectionsComponentDay3 extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService) {
    super(_weatherService);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
