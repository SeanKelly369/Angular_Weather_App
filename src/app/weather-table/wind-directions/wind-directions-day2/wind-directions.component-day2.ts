import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-wind-directions-day2',
  templateUrl: './wind-directions.component-day2.html',
  styleUrls: ['./wind-directions.component-day2.scss']
})
export class WindDirectionsComponentDay2 extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService) {
    super(_weatherService);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
