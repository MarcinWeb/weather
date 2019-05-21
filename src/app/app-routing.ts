import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WeatherComponent} from './weather/weather.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }];
export const noPageFound: Routes = [
  { path: '**', component: PageNotFoundComponent}
];

export function getRoutes() {
  return [...routes, ...noPageFound];
}

export const routing: ModuleWithProviders = RouterModule.forRoot(getRoutes(), {
  preloadingStrategy: PreloadAllModules
});

