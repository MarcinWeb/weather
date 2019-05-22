import { Component, Input } from '@angular/core';
import { WeatherElement } from '../../weather';
import { WeatherElementService } from './weather-element.service';

@Component({
  selector: 'app-weather-element',
  templateUrl: './weather-element.component.html'
})
export class WeatherElementComponent {
  @Input() weather: WeatherElement;

  constructor(private weatherElementService: WeatherElementService) { }

  setIcon(icon) {
    return this.weatherElementService.convertIcon(icon);
  }
}
