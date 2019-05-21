import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherElementService {
  weatherInconName = new Map([
    ['01d', 'wi-day-sunny'],
    ['01n', 'wi-night-clear'],
    ['02d', 'wi-day-cloudy'],
    ['02n', 'wi-night-alt-cloudy'],
    ['03d', 'wi-cloud'],
    ['03n', 'wi-cloud'],
    ['04d', 'wi-cloudy'],
    ['04n', 'wi-cloudy'],
    ['09d', 'wi-showers'],
    ['09n', 'wi-showers'],
    ['10d', 'wi-day-rain-mix'],
    ['10n', 'wi-night-rain-mix'],
    ['11d', 'wi-day-thunderstorm'],
    ['11n', 'wi-night-thunderstorm'],
    ['13d', 'wi-day-snow'],
    ['13n ', 'wi-day-snow'],
    ['50d', 'wi-fog'],
    ['50n', 'wi-fog'],
  ]);
  constructor() { }
  convertIcon(icon): string {
    return this.weatherInconName.get(icon);
  }

}
