import { Component, Input } from '@angular/core';
import { Forecast } from '../weather';
import { WeatherSettings } from '../weather-settings/weather-settings';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html'
})
export class WeatherDetailsComponent {
  @Input() weatherSettings: WeatherSettings;
  @Input() forecast: Forecast;

  constructor() { }
}
