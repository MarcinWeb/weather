import {Routes, Route} from '@angular/router';
import {WeatherComponent} from './weather.component';

export const weatherRoutes: Routes = [
  {
    path: ':id',
    component: WeatherComponent
  }
];

export const weatherLazyLoadRoute: Route = {
  path: 'title',
  loadChildren: 'app/weather/weather.module#WeatherModule'
};
