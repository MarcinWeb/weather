import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherElementComponent } from './weather-element/weather-element.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { WeatherWindComponent } from './weather-wind/weather-wind.component';
import { dummyForecast, dummySettings } from '../../test/data.spec';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDetailsComponent, WeatherElementComponent, WeatherMainComponent, WeatherWindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    component.weatherSettings = dummySettings;
    component.forecast = dummyForecast;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
