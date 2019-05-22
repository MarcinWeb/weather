import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { weatherRoutes } from './weather.routing';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../component/component.module';
import { WeatherSettingsComponent } from './weather-settings/weather-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherMainComponent } from './weather-details/weather-main/weather-main.component';
import { WeatherWindComponent } from './weather-details/weather-wind/weather-wind.component';
import { WeatherElementComponent } from './weather-details/weather-element/weather-element.component';
import { WeatherGraphsComponent } from './weather-graphs/weather-graphs.component';
import { WeatherChartComponent } from './weather-graphs/weather-chart/weather-chart.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(weatherRoutes),
    ComponentModule,
    ReactiveFormsModule
  ],
  providers: [
    WeatherService
  ],
  declarations: [WeatherComponent, WeatherSettingsComponent, WeatherDetailsComponent, WeatherMainComponent,
    WeatherWindComponent, WeatherElementComponent, WeatherGraphsComponent, WeatherChartComponent],
  exports: [WeatherComponent]
})
export class WeatherModule { }
