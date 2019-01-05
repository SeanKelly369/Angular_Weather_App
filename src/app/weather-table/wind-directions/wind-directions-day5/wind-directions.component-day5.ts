import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-wind-directions-day5',
  templateUrl: './wind-directions.component-day5.html',
  styleUrls: ['./wind-directions.component-day5.scss']
})
export class WindDirectionsComponentDay5 extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService) {
    super(_weatherService);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
