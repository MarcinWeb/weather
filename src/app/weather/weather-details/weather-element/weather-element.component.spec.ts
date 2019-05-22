import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherElementComponent } from './weather-element.component';
import { dummyWeatherElement } from '../../../test/data.spec';

describe('WeatherElementComponent', () => {
  let component: WeatherElementComponent;
  let fixture: ComponentFixture<WeatherElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherElementComponent);
    component = fixture.componentInstance;
    component.weather = dummyWeatherElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
