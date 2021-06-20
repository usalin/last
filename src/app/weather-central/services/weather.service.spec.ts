import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { cityDetailData } from '../models/city.model';


describe('WeatherService', () => {

    let weatherService: WeatherService,
        httpTestingController: HttpTestingController;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                WeatherService
            ]
        });

        weatherService = TestBed.get(WeatherService),
        httpTestingController = TestBed.get(HttpTestingController);

    });

    it('should return forecast by name', () => {
 
      weatherService.getCityWeatherForecastDataByName("Izmir")
      .subscribe(data => {
         expect(data).toBeTruthy();
         expect(data[0].dt).toBe(1624201200);
     });
      const req = httpTestingController.expectOne('http://api.openweathermap.org/data/2.5/forecast?q=Izmir&appid=d8dc7aa333b5ac6741cb978ae0e0f3ff&units=metric');
      expect(req.request.method).toEqual("GET");

      req.flush(cityDetailData[4]);

  });







   });
