import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-wind-directions-3hrs',
  templateUrl: './wind-directions.component-3hrs.html',
  styleUrls: ['./wind-directions.component-3hrs.scss']
})
export class WindDirectionsComponent3Hrs extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService) {
    super(_weatherService);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
