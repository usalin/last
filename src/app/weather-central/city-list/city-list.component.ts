import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDataObject } from '../models/city.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {

  responseList$ = this.weatherService.requestDataFromMultipleSources();
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
}
