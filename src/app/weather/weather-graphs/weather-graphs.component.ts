import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Forecast } from '../weather';

@Component({
  selector: 'app-weather-graphs',
  templateUrl: './weather-graphs.component.html'
})
export class WeatherGraphsComponent {
  @Input()
  set forecasts(forecasts: Forecast[]) {
    this._forecasts = forecasts;
    this.splitForecastForDays(forecasts);
  }
  get forecasts(): Forecast[] {
    return this._forecasts;
  }
  @Output() fillDetails: EventEmitter<Forecast> = new EventEmitter();
  private _forecasts: Forecast[];
  forecastRange = 5;
  nDayForecast = {};
  objectKeys = Object.keys;

  constructor() { }

  splitForecastForDays(forecasts: Forecast[]): void {
    for (let day = 0; day < this.forecastRange; day++) {
      this.nDayForecast['day' + day] =  forecasts.slice(day * 8, (day + 1) * 8);
    }
  }

  fillWeatherDetails(forecasts: Forecast[]) {
    this.fillDetails.emit(forecasts[0]);
  }
}
