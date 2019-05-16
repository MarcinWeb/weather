import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Weather} from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit, OnDestroy {
  weather: Weather;
  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getWeather().subscribe((weather: Weather) => {
      this.weather = weather;
    });
  }

  ngOnDestroy(): void {}

  private getWeather(): Observable<Weather> {
    return this.weatherService.getWeather(null);
  }
}

