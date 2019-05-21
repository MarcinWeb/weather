import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../weather';
import {WeatherSettings} from '../weather-settings/weather-settings';
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() weatherSettings: WeatherSettings;
  @Input() forecast: Forecast;
  constructor() { }
  ngOnInit() {
  }
}
