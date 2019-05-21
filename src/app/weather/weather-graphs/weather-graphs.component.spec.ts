import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGraphsComponent } from './weather-graphs.component';

describe('WeatherGraphsComponent', () => {
  let component: WeatherGraphsComponent;
  let fixture: ComponentFixture<WeatherGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
