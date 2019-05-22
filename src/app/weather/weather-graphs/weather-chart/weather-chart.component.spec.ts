import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherChartComponent } from './weather-chart.component';
import { dummyChartData, dummyChartOptions, dummyForecast } from '../../../test/data.spec';
import { ChartComponent } from '../../../component/chart/chart/chart.component';

describe('WeatherChartComponent', () => {
  let component: WeatherChartComponent;
  let fixture: ComponentFixture<WeatherChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherChartComponent, ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherChartComponent);
    component = fixture.componentInstance;
    component.options = dummyChartOptions;
    component.data = dummyChartData;
    component.forecasts = [dummyForecast];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
