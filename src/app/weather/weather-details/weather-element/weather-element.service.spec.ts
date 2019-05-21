import { TestBed } from '@angular/core/testing';

import { WeatherElementService } from './weather-element.service';

describe('WeatherElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherElementService = TestBed.get(WeatherElementService);
    expect(service).toBeTruthy();
  });
});
