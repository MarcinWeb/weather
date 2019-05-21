import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../app-config.service';
import {Observable} from 'rxjs';
// import {TemperatureScale, WeatherApiResoponse, WeatherSettings} from './weather';
import {TemperatureScale, WeatherSettings} from './weather-settings/weather-settings';
import {WeatherApiResponse} from './weather';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl: string = config.BACKEND_URL;
  queryUrl = '?APPID=' + config.BACKEND_KEY + '&q=';
  constructor(private http: HttpClient) { }
  getWeather(location: string, units: TemperatureScale): Observable<WeatherApiResponse> {
    let queryUnitParam = '';
    if (units === TemperatureScale.CELCIUS) { queryUnitParam += '&units=metric'; }
    if (units === TemperatureScale.FAHRENHEIT) { queryUnitParam += '&units=imperial'; }
    return this.http.get<WeatherApiResponse>(this.baseUrl + this.queryUrl + location + queryUnitParam);
  }

  getConfigSettings(): Observable<WeatherSettings> {
    return this.http.get<WeatherSettings>('./assets/initWeatherSettingsData.json');
  }
}
