import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { WeatherSettingsComponent } from './weather-settings.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { dummySettings } from '../../test/data.spec';

describe('WeatherSettingsComponent', () => {
  let component: WeatherSettingsComponent;
  let fixture: ComponentFixture<WeatherSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        WeatherSettingsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(WeatherSettingsComponent);
    component = fixture.componentInstance;
    component.weatherSettings = dummySettings;
    component.weatherSettingsForm = fb.group({
      showWind: [component.weatherSettings.showWind, Validators.required],
      showDetails: [component.weatherSettings.showDetails, Validators.required],
      showForecast: [component.weatherSettings.showForecast, Validators.required],
      forecastMode: [component.weatherSettings.forecastMode, Validators.required],
      scale: [component.weatherSettings.scale, Validators.required]
    });
    component.onWeatherSettingsChange();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
