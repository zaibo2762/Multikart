import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-market-value',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule],
  templateUrl: './market-value.component.html',
  styleUrl: './market-value.component.css',
})
export class MarketValueComponent implements OnInit {
  chartOptions: any;
  highcharts: typeof Highcharts = Highcharts;
  constructor() {}
  barChart() {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Market Value',
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8'],
      },
      series: this.chartData,
    };
  }

  ngOnInit(): void {
    this.barChart();
  }
  chartData = [
    {
      name: '1',
      data: [2.5, 3.5],
    },
    {
      name: '2',
      data: [9, 7.5],
    },
    {
      name: '3',
      data: [6.5, 6],
    },
    {
      name: '4',
      data: [4.5, 7],
    },
    {
      name: '5',
      data: [1, 2.5],
    },
    {
      name: '6',
      data: [6.5, 7],
    },
    {
      name: '7',
      data: [5.5, 6],
    },
    {
      name: '8',
      data: [1.5, 4],
    },
  ];
}
