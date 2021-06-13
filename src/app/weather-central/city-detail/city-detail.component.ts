import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { List } from '../models/forecast.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss'],
})
export class CityDetailComponent implements OnInit {
  forecastDataList: List[];
  cityName: string;
  isReady = false;
  isLoading = false;

  constructor(private activatedRoute: ActivatedRoute, private weatherService: WeatherService) { }
  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      tap(() => this.isLoading = true),
      switchMap((params: ParamMap) => {
        this.cityName = params.get('name');
        return this.weatherService.getCityWeatherForecastDataByName(params.get('name'));
      }),
    ).subscribe(data => {
      this.forecastDataList = data;
      this.isReady = true;
      this.isLoading = false;
    });
  }
  public getIconUrl(iconCode: string) {
    const iconUrl = environment.iconPrefixUrl;
    return `${iconUrl}/${iconCode}.png`;
  }
}
