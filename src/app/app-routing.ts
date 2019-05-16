import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {weatherLazyLoadRoute} from './weather/weather.routing';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }];
export const noPageFound: Routes = [
  { path: '**', component: PageNotFoundComponent}
];

export function getRoutes() {
  return [...routes, ...weatherLazyLoadRoute, ...noPageFound];
}

export const routing: ModuleWithProviders = RouterModule.forRoot(getRoutes(), {
  preloadingStrategy: PreloadAllModules
});

