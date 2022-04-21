import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  ngOnInit(): void {
  }
  public doughnutChartOptions = {

      plugins: {
          legend: {
              display: false,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
      }

  }
  public doughnutChartLabels: string[] = [ 'OPSY', 'OGLD', 'AVAX' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [ 504.05 , 202.54, 125.89 ],
        backgroundColor: ['#02c6c6', '#e9d000', '#e84142'],
        hoverBackgroundColor: ['#02c6c6', '#e9d000', '#e84142'],
        hoverBorderColor : ['#03082200', '#03082200', '#03082200'],
        borderColor: ['#02c6c6', '#e9d000', '#e84142']
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
