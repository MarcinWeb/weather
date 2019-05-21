import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {TemperatureScale, WeatherSettings} from './weather-settings/weather-settings';
import {Forecast, WeatherApiResponse} from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit, OnDestroy {
  weather: WeatherApiResponse;
  forecast: Forecast;
  weatherSettings: WeatherSettings;
  errorMessage = '';
  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initWeatherSettings();
  }

  updateWeatherData(location: string, scale: TemperatureScale) {
    this.getWeather(location, scale).subscribe((weather: WeatherApiResponse) => {
      this.weather = weather;
      this.forecast = weather.list[0];
      this.errorMessage = '';
    },
      (error => {this.errorMessage = error.error.message; }));
  }

  ngOnDestroy(): void {}

  private getWeather(location, scale): Observable<WeatherApiResponse> {
    return this.weatherService.getWeather(location, scale );
  }

  changeSettings(event: WeatherSettings) {
    console.log('settings changed', event);
    this.weatherSettings = event;
    this.updateWeatherData(this.weatherSettings.location, this.weatherSettings.scale);
    console.log('settings changed', this.weatherSettings);

  }

  initWeatherSettings() {
    this.weatherService.getConfigSettings().subscribe(weatherSettings => {
        this.weatherSettings = weatherSettings;
        this.updateWeatherData(this.weatherSettings.location, this.weatherSettings.scale);
      }
    );
  }

  fillDetails(event: Forecast) {
    console.log('evemt', event);
    this.forecast = event;
  }
  currentForecast() {
    return;
  }
}

