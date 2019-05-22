import {ForecastMode, TemperatureScale, WeatherSettings} from '../weather/weather-settings/weather-settings';
import {City, Forecast, WeatherApiResponse, WeatherCoord, WeatherElement, WeatherMain, WeatherSys, WeatherWind} from '../weather/weather';
import {ChartOptions, ChartData} from 'chart.js';
import {Config} from '../model/config';

export const dummyWeatherElement: WeatherElement = {
  id: 800,
  main: 'Clear',
  description: 'clear sky',
  icon: '01n'
};

export const dummyWeatherMain: WeatherMain = {
  humidity: 44,
  pressure: 1012.9,
  temp: 6.79,
  temp_max: 9.05,
  temp_min: 6.79,
};

export const dummyWeatherWind: WeatherWind = {
  speed: 4.32,
  deg: 249.191
};

export const dummyWeatherSys: WeatherSys = {
  type: 83,
  id: 332,
  message: 323,
  country: 'USA',
  sunrise: 1558504800,
  sunset: 1558604800,
};

export const dummyForecast: Forecast = {
  clouds: {all: 0},
  dt: 1558504800,
  dt_txt: '2019-05-22 06:00:00',
  main: dummyWeatherMain,
  sys: dummyWeatherSys,
  weather: [
    dummyWeatherElement
  ],
  wind: dummyWeatherWind
};

export const dummyWeatherCoord: WeatherCoord =  {
  lon: 58,
  lat: 43
};

export const dummyCity: City = {
  id: 8990,
  name: 'California',
  coord: dummyWeatherCoord,
  country: 'USA',
  population: 83828992
};

export const dummyWeatherApiResponse: WeatherApiResponse = {
  city: dummyCity,
  cod: '301',
  message: 323,
  cnt: 7993,
  list: [dummyForecast]
};

export const  dummySettings: WeatherSettings = {
  location: 'California',
  scale: TemperatureScale.CELCIUS,
  showWind: true,
  showDetails: true,
  showForecast: true,
  forecastMode: ForecastMode.GRID
};

export const  dummyChartOptions: ChartOptions = {
  legend: {
    display: false
  },
  responsive: true,
    maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          unit: 'hour',
          isoWeekday: true,
          displayFormats: {
            hour: 'hA'
          },
          tooltipFormat: 'LLL'
        },
        gridLines: {
          display: false
        },
        ticks: {
          display: true,
          fontColor: 'white',
          fontSize: 16,
          maxTicksLimit: 3
        }
      }
    ],
      yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          fontColor: 'white',
          fontSize: 16,
          autoSkip: true,
          labelOffset: 0,
          mirror: false,
          maxTicksLimit: 3,
        }
      }
    ]
  }
};

export const dummyTempMax = [7.85, 7.15, 18.85, 25.5, 26.76, 22.29, 12.47, 10.08];

export const dummyTempMin = [7.85, 7.15, 18.85, 25.5, 26.76, 22.29, 12.47, 10.08];

export const dummyAllDates = ['2019-05-22 09:00:00', '2019-05-22 12:00:00', '2019-05-22 15:00:00',
  '2019-05-22 18:00:00', '2019-05-22 21:00:00', '2019-05-23 00:00:00', '2019-05-23 03:00:00', '2019-05-23 06:00:00'];

export const  dummyChartData: ChartData = {
  labels: dummyAllDates,
  datasets: [
    {
      data: dummyTempMax,
      borderColor: '#b20000',
      fill: true
    },
    {
      data: dummyTempMin,
      borderColor: '#000099',
      fill: true
    },
  ]
};

export const dummyConfig: Config = {
  BACKEND_URL: 'https://api.openweathermap.org/data/2.5/forecast',
  BACKEND_KEY: '362782e18dd1d252cfd00fc87e8002c5',
  UseBackend: true
};
