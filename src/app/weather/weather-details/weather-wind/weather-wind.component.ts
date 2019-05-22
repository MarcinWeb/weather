import { Component, Input } from '@angular/core';
import { TemperatureScale } from '../../weather-settings/weather-settings';
import { WeatherWind } from '../../weather';

@Component({
  selector: 'app-weather-wind',
  templateUrl: './weather-wind.component.html'
})
export class WeatherWindComponent {
  @Input() weatherWind: WeatherWind;
  @Input() scale: TemperatureScale;

  constructor() { }

  parseInt(deg: number): number {
    return Math.floor(deg);
  }

  scaleWind(scale) {
    switch (scale) {
      case TemperatureScale.CELCIUS:
      case TemperatureScale.KELVIN:
        return 'm/s';
      case TemperatureScale.FAHRENHEIT:
        return 'mil/h';
      default:
        return '';
    }
  }
}
