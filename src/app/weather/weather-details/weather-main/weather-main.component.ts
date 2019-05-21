import {Component, Input, OnInit} from '@angular/core';
import {WeatherMain} from '../../weather';
import {TemperatureScale} from '../../weather-settings/weather-settings';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit {
  @Input() weatherMain: WeatherMain;
  @Input() scale: TemperatureScale;
  constructor() { }

  ngOnInit() {
  }

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
