import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { WeatherDataObject } from '../models/city.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  responseList: WeatherDataObject[];
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.requestDataFromMultipleSources().pipe(take(1)).subscribe(responseList => {
      this.responseList = responseList;
    })
  }
}
