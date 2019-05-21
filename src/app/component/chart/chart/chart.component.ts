import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { Chart, ChartOptions, ChartData } from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  @ViewChild('myCanvasHolder') myCanvasHolder: ElementRef;
  @Input() type: 'line' | 'bar' | 'radar' | 'pie' | 'polarArea' | 'bubble' | 'scatter';
  @Input() data: ChartData;
  @Input() options: ChartOptions;
  chart: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.chartUpdate();
  }
  chartUpdate(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    this.myCanvas.nativeElement.getContext('2d').clearRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height)
    const ctx = this.myCanvas.nativeElement.getContext('2d');

    this.chart = new Chart(ctx, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }

}
