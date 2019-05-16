import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {weatherRoutes} from './weather.routing';
import {WeatherService} from './weather.service';
import {WeatherComponent} from './weather.component';
import {RouterModule} from '@angular/router';
// import {ComponentModule} from '../component/component.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(weatherRoutes),
    // ComponentModule,
  ],
  providers: [
    WeatherService
  ],
  declarations: [WeatherComponent],
  exports: [WeatherComponent]
})
export class WeatherModule { }
