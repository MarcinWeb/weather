import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGraphsComponent } from './weather-graphs.component';
import { dummyForecast } from '../../test/data.spec';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';
import { ChartComponent } from '../../component/chart/chart/chart.component';

describe('WeatherGraphsComponent', () => {
  let component: WeatherGraphsComponent;
  let fixture: ComponentFixture<WeatherGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGraphsComponent, WeatherChartComponent, ChartComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGraphsComponent);
    component = fixture.componentInstance;
    const dayForecast = [dummyForecast, dummyForecast, dummyForecast, dummyForecast, dummyForecast,
      dummyForecast, dummyForecast, dummyForecast];
    component.forecasts = dayForecast.concat(dayForecast, dayForecast, dayForecast, dayForecast, dayForecast);

    component.splitForecastForDays(component.forecasts);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
