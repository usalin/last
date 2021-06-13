import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { ForecastDataObject } from '../models/forecast.model';
import { Cities } from '../models/city.model';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }

  getCityWeatherForecastDataByName(cityName: string) {
    return this.http.get<ForecastDataObject>(environment.apiBaseUrl + `forecast?q=${cityName}&appid=${environment.openWeatherApiKey}&units=metric`)
      .pipe(
        map((data: ForecastDataObject) => {
          const numberOfDataPoints = 8;
          let forecastDataToday = data.list.slice(1, (1 + numberOfDataPoints));
          return forecastDataToday;
        })
      );
  }
  requestDataFromMultipleSources(): Observable<any[]> {
    const cities = Cities.map((city)=> this.getAverageWeatherByCityName(city.name));
    return forkJoin(cities);
  }
  private getAverageWeatherByCityName(cityName: string) {
    return this.http.get(environment.apiBaseUrl + `weather?q=${cityName}&appid=${environment.openWeatherApiKey}&units=metric`)
  }

}
