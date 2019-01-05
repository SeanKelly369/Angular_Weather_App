import { Component, OnInit } from '@angular/core';
import { WeatherTableComponent } from '../../weather-table.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-wind-directions-1hr',
  templateUrl: './wind-directions.component-1hr.html',
  styleUrls: ['./wind-directions.component-1hr.scss']
})
export class WindDirectionsComponent1Hr extends WeatherTableComponent implements OnInit {

  constructor(_weatherService: WeatherService) {
    super(_weatherService);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
