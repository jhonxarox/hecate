import { Component, OnInit, ViewChild } from '@angular/core';

import { Data, Gross, Net, Apv } from '../data';

import { ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis } from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis | ApexYAxis[];
    title: ApexTitleSubtitle;
    labels: string[];
    stroke: any; // ApexStroke;
    dataLabels: any; // ApexDataLabels;
    fill: ApexFill;
    tooltip: ApexTooltip;
  };

@Component({
  selector: 'app-purchase-chart',
  templateUrl: './purchase-chart.component.html',
  styleUrls: ['./purchase-chart.component.scss']
})
export class PurchaseChartComponent implements OnInit {

  gross = Gross;
  net = Net;
  apv = Apv;
  periods = [
    { viewValue: "Last 6 Month", value: 180},
    { viewValue: "Last 3 Month", value: 90},
    { viewValue: "Last Month", value: 30},
    { viewValue: "Last Week", value: 7},
  ];

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Gross",
          type: "column",
          data: this.gross.map((item) => { return item.value; })
        },
        {
          name: "Net",
          type: "column",
          data: this.net.map((item) => { return item.value; })
        },
        {
          name: "Apv",
          type: "column",
          data: this.apv.map((item) => { return item.value; })
        },
        {
          name: "Gross",
          type: "line",
          data: this.gross.map((item) => { return item.value; })
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2021",
        "02 Jan 2021",
        "03 Jan 2021",
        "04 Jan 2021",
        "05 Jan 2021",
        "06 Jan 2021",
        "07 Jan 2021",
        "08 Jan 2021",
        "09 Jan 2021",
        "10 Jan 2021",
        "11 Jan 2021",
        "12 Jan 2021"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [ ]
    };
  }

  ngOnInit(): void {
  }

}
