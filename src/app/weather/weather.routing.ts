import { Routes, Route } from '@angular/router';
import { WeatherComponent } from './weather.component';

export const weatherRoutes: Routes = [
  {
    path: '',
    component: WeatherComponent
  }
];

export const weatherLazyLoadRoute: Route = {
  path: 'weather',
  loadChildren: 'app/weather/weather.module#WeatherModule'
};
