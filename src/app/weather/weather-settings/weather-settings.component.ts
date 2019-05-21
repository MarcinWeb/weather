import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ForecastMode, TemperatureScale, WeatherSettings} from '../weather-settings/weather-settings';
import {Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-weather-settings',
  templateUrl: './weather-settings.component.html',
  styleUrls: ['./weather-settings.component.scss']
})
export class WeatherSettingsComponent implements OnInit, OnDestroy {
  weatherSettingsForm: FormGroup;
  objectKeys = Object.keys;
  forecastMode = ForecastMode;
  temperatureScale = TemperatureScale;
  private subscr: Subscription;

  @Output() settings: EventEmitter<WeatherSettings> = new EventEmitter();
  @Input() weatherSettings: WeatherSettings;

  constructor(private formBuilder: FormBuilder) { }

  searchLocation$ = new Subject<string>();

  ngOnInit() {
    this.onLocationChange();
    this.createWeatherSettingsForm();
    this.onWeatherSettingsChange();
  }

  ngOnDestroy(): void {
    this.subscr.unsubscribe();

  }

  createWeatherSettingsForm(): void {
    this.weatherSettingsForm = this.formBuilder.group({
      showWind: [this.weatherSettings.showWind, Validators.required],
      showDetails: [this.weatherSettings.showDetails, Validators.required],
      showForecast: [this.weatherSettings.showForecast, Validators.required],
      forecastMode: [this.weatherSettings.forecastMode, Validators.required],
      scale: [this.weatherSettings.scale, Validators.required]
    });
  }

  onWeatherSettingsChange(): void {
    this.subscr = this.weatherSettingsForm.valueChanges.subscribe((val) => {
      this.weatherSettings.showWind =  val.showWind;
      this.weatherSettings.showDetails = val.showDetails;
      this.weatherSettings.showForecast = val.showForecast;
      this.weatherSettings.forecastMode = val.forecastMode;
      this.weatherSettings.scale = val.scale;
      this.sendSettingsToParent();
    });
  }
  onLocationChange(): void {
    this.searchLocation$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(location => {
      this.weatherSettings.location = location;
      this.sendSettingsToParent();
    });
  }

  sendSettingsToParent(): void {
    this.settings.emit(this.weatherSettings);
  }
}
