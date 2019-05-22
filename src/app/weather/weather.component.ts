import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';
import { TemperatureScale, WeatherSettings } from './weather-settings/weather-settings';
import { Forecast, WeatherApiResponse } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  weather: WeatherApiResponse;
  forecast: Forecast;
  weatherSettings: WeatherSettings;
  errorMessage = '';

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.initWeatherSettings();
  }

  updateWeatherData(location: string, scale: TemperatureScale) {
    this.getWeather(location, scale).subscribe((weather: WeatherApiResponse) => {
      this.weather = weather;
      this.forecast = weather.list[0];
      this.errorMessage = null;
    },
      (error => {
        this.weather = null;
        this.forecast = null;
        this.errorMessage = error.error.message; }));
  }

  private getWeather(location, scale): Observable<WeatherApiResponse> {
    return this.weatherService.getWeather(location, scale );
  }

  changeSettings(event: WeatherSettings) {
    this.weatherSettings = event;
    this.updateWeatherData(this.weatherSettings.location, this.weatherSettings.scale);
  }

  initWeatherSettings() {
    this.weatherService.getConfigSettings().subscribe(weatherSettings => {
        this.weatherSettings = weatherSettings;
        this.updateWeatherData(this.weatherSettings.location, this.weatherSettings.scale);
      }
    );
  }

  fillDetails(event: Forecast) {
    this.forecast = event;
  }
}

