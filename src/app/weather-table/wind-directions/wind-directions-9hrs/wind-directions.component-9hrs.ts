import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-wind-directions-9hrs',
  templateUrl: './wind-directions.component-9hrs.html',
  styleUrls: ['./wind-directions.component-9hrs.scss']
})
export class WindDirectionsComponent9Hrs extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService) {
    super(_weatherService);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
