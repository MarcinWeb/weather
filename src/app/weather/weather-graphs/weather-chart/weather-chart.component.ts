import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Forecast } from '../../weather';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html'
})
export class WeatherChartComponent implements OnChanges {
  data: ChartData;
  options: ChartOptions;
  @Input() forecasts: Forecast[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = this.chartDataUpdate();
    this.options = this.chartOptionsUpdate();
  }

  chartDataUpdate(): ChartData {
    const tempMax = this.forecasts.map(res => res.main.temp_max);
    const tempMin = this.forecasts.map(res => res.main.temp_min);
    const allDates = this.forecasts.map(res => res.dt_txt);
    return {
      labels: allDates,
      datasets: [
        {
          data: tempMax,
          borderColor: "#b20000",
          fill: true
        },
        {
          data: tempMin,
          borderColor: "#000099",
          fill: true
        },
      ]
    };
  }

  chartOptionsUpdate(): ChartOptions {
    return {
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
      },
    };
  }
}
