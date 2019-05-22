import { Component, Input } from '@angular/core';
import { WeatherMain } from '../../weather';
import { TemperatureScale } from '../../weather-settings/weather-settings';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html'
})
export class WeatherMainComponent {
  @Input() weatherMain: WeatherMain;
  @Input() scale: TemperatureScale;

  constructor() { }

  scaleTemperature(scale) {
    switch (scale) {
      case TemperatureScale.CELCIUS:
        return 'C';
        break;
      case TemperatureScale.FAHRENHEIT:
        return 'F';
        break;
      case TemperatureScale.KELVIN:
        return 'K';
        break;
      default:
        return 'C';
    }
  }
}
