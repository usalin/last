import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/weather-central', pathMatch: 'full', },
  {
    path: 'weather-central', loadChildren: () => import('./weather-central/weather-central.module').then(m => m.WeatherCentralModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
