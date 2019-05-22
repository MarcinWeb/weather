import { TestBed } from '@angular/core/testing';

import { AppConfigService } from './app-config.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../environments/environment';
import { dummyConfig } from './test/data.spec';

describe('AppConfigService', () => {
  let service: AppConfigService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppConfigService]
    });
    service = TestBed.get(AppConfigService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load prod app config', () => {
    environment.production = true;
    service.loadAppConfig();

    const req = httpMock.expectOne('./assets/config.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyConfig);
  });

  it('should load dev app config', () => {
    environment.production = false;
    service.loadAppConfig();

    const req = httpMock.expectOne('./assets/dev-config.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyConfig);
  });
});






