import {Component, Input, OnInit} from '@angular/core';
import {WeatherElement} from '../../weather';
import {WeatherElementService} from './weather-element.service';

@Component({
  selector: 'app-weather-element',
  templateUrl: './weather-element.component.html',
  styleUrls: ['./weather-element.component.scss']
})
export class WeatherElementComponent implements OnInit {
  @Input() weather: WeatherElement;
  constructor(private weatherElementService: WeatherElementService) { }

  ngOnInit() {

  }
  setIcon(icon) {
    return this.weatherElementService.convertIcon(icon);
  }
}
