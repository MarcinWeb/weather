import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherMainComponent } from './weather-main.component';
import { TemperatureScale } from '../../weather-settings/weather-settings';
import { dummyWeatherMain } from '../../../test/data.spec';

describe('WeatherMainComponent', () => {
  let component: WeatherMainComponent;
  let fixture: ComponentFixture<WeatherMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMainComponent);
    component = fixture.componentInstance;
    component.scale = TemperatureScale.CELCIUS;
    component.weatherMain = dummyWeatherMain;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
