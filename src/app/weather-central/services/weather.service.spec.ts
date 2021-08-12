import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { cityDetailData, req1Data, req2Data } from '../models/city.model';
import { forkJoin } from 'rxjs';


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

  it('should return the constructed data', () => {
   let cityOne, cityTwo;

   weatherService.requestDataFromMultipleSources()
   .subscribe(data => {
      cityOne = data[0];
      cityTwo = data[1];
      
      expect (cityOne).toEqual(req1Data);
      expect (cityTwo).toEqual(req2Data);

      expect(data).toBeTruthy();
      expect(cityOne).toBeTruthy();
      expect(cityTwo).toBeTruthy();

  });
   const req1 = httpTestingController.expectOne('http://api.openweathermap.org/data/2.5/weather?q=Izmir&appid=d8dc7aa333b5ac6741cb978ae0e0f3ff&units=metric');
   const req2 = httpTestingController.expectOne('http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=d8dc7aa333b5ac6741cb978ae0e0f3ff&units=metric');

   expect(req1.request.method).toEqual("GET");
   expect(req2.request.method).toEqual("GET");

   const complex = forkJoin([req1, req2]);

   req1.flush(req1Data);
   req2.flush(req2Data);

});





   });
