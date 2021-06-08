import { NgModule } from '@angular/core';
import { WeatherCentralRoutingModule } from './weather-central-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    CityListComponent,
    CityDetailComponent,
  ],
  imports: [
    SharedModule,
    WeatherCentralRoutingModule,
    HttpClientModule,
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherCentralModule { }
