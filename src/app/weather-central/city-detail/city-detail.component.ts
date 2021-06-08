import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/internal/operators/take';
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
    this.activatedRoute.paramMap.subscribe(params => {
      this.isLoading = true;
      this.cityName = params.get("name");
      this.weatherService.getCityWeatherForecastDataByName(this.cityName).pipe(take(1)).subscribe((data: List[]) => {
        this.forecastDataList = data;
        this.isReady = true;
        this.isLoading = false;
      })
    });
  }
  public getIconUrl(iconCode: string) {
    const iconUrl = environment.iconPrefixUrl;
    return `${iconUrl}/${iconCode}.png`;
  }
}
