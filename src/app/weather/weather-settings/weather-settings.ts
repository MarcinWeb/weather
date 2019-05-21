export interface WeatherSettings {
  location: string;
  scale: TemperatureScale;
  showWind?: boolean;
  showDetails?: boolean;
  showForecast?: boolean;
  forecastMode?: ForecastMode;
}
export enum ForecastMode {
  GRID = 'GRID',
  DETAILED = 'DETAILED',
}
export enum TemperatureScale {
  CELCIUS = 'CELCIUS',
  KELVIN = 'KELVIN',
  FAHRENHEIT = 'FAHRENHEIT',
}


