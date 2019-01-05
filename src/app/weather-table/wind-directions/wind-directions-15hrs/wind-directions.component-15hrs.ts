import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-wind-directions-15hrs',
  templateUrl: './wind-directions.component-15hrs.html',
  styleUrls: ['./wind-directions.component-15hrs.scss']
})
export class WindDirectionsComponent15Hrs extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService) {
    super(_weatherService);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
