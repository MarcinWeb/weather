import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherWindComponent } from './weather-wind.component';
import { TemperatureScale } from '../../weather-settings/weather-settings';
import { dummyWeatherWind } from '../../../test/data.spec';

describe('WeatherWindComponent', () => {
  let component: WeatherWindComponent;
  let fixture: ComponentFixture<WeatherWindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWindComponent);
    component = fixture.componentInstance;
    component.scale = TemperatureScale.CELCIUS;
    component.weatherWind = dummyWeatherWind;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
