import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeatherSettings} from '../weather-settings/weather-settings';
import {Forecast} from '../weather';

@Component({
  selector: 'app-weather-graphs',
  templateUrl: './weather-graphs.component.html',
  styleUrls: ['./weather-graphs.component.scss']
})
export class WeatherGraphsComponent {
  @Input() weatherSettings: WeatherSettings;
  @Input()
  set forecasts(forecasts: Forecast[]) {
    this.splitForecastForDays(forecasts);
    this._forecasts = forecasts;
  }
  get forecasts(): Forecast[] {
    return this._forecasts;
  }
  @Output() fillDetails: EventEmitter<Forecast> = new EventEmitter();
  private _forecasts: Forecast[];
  forecastRange = 5;
  fiveDayForecast = {};
  objectKeys = Object.keys;

  constructor() { }

  splitForecastForDays(forecasts: Forecast[]): void {
    for (let day = 0; day < this.forecastRange; day++) {
      this.fiveDayForecast['day' + day] =  forecasts.slice(day * 8, (day + 1) * 8);
    }
  }
  fillWeatherDetails(forecasts: Forecast[]) {
    this.fillDetails.emit(forecasts[0]);
    console.log(forecasts[0]);
  }

}
