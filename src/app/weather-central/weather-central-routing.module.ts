import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityListComponent } from './city-list/city-list.component';
const routes: Routes = [
  {
    path: '', component: CityListComponent,
    children: [{ path: ':name', component: CityDetailComponent }]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherCentralRoutingModule { }
