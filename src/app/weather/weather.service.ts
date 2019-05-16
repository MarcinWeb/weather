import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../app-config.service';
import {Observable, of} from 'rxjs';
import {Weather} from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl: string = config.BACKEND_URL;
  queryUrl = '?apikey=' + config.BACKEND_KEY + '&i=';
  constructor(private http: HttpClient) { }

  getWeather(id: string): Observable<Weather> {
    return of(null);
    // return this.http.get<Weather>(this.baseUrl + this.queryUrl + id);
  }
}
