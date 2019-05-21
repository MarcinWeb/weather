export interface WeatherApiResponse {
  city: City;
  cod: string;
  message: number;
  cnt: number;
  list: Forecast[];
}
export interface City {
  id: number;
  name: string;
  coord: WeatherCoord;
  country: string;
  population: number;
}
export interface Forecast {
  dt: number;
  dt_txt: string;
  weather: WeatherElement[];
  main: WeatherMain;
  wind: WeatherWind;
  clouds: {
    all: number;
  };
  sys: WeatherSys;
}
export interface WeatherElement {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface WeatherMain {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
export interface WeatherWind {
  speed: number;
  deg: number;
}
export interface WeatherSys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export interface WeatherCoord {
  lon: number;
  lat: number;
}
