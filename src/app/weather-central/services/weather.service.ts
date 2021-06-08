import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { ForecastDataObject } from '../models/forecast.model';

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
    let response1 = this.http.get(environment.apiBaseUrl + `weather?q=Izmir&appid=${environment.openWeatherApiKey}&units=metric`);
    let response2 = this.http.get(environment.apiBaseUrl + `weather?q=Stockholm&appid=${environment.openWeatherApiKey}&units=metric`);
    let response3 = this.http.get(environment.apiBaseUrl + `weather?q=Amsterdam&appid=${environment.openWeatherApiKey}&units=metric`);
    let response4 = this.http.get(environment.apiBaseUrl + `weather?q=Prague&appid=${environment.openWeatherApiKey}&units=metric`);
    let response5 = this.http.get(environment.apiBaseUrl + `weather?q=Milan&appid=${environment.openWeatherApiKey}&units=metric`);

    return forkJoin([response1, response2, response3, response4, response5]);
  }
}
