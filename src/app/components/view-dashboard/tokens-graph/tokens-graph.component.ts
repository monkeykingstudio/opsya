import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import axios from 'axios';

@Component({
  selector: 'app-tokens-graph',
  templateUrl: './tokens-graph.component.html',
  styleUrls: ['./tokens-graph.component.scss']
})
export class TokensGraphComponent implements OnInit {
  tokenGraph: string = 'opsy';
  apiUrlOpsy = 'https://api.nomics.com/v1/currencies/ticker?key=f5b59998d652a0de52dc8f6718e713147699fe4b&ids=OPSY&interval=1d,30d&convert=EUR&platform-currency=AVAX&per-page=100&page=1'
  apiUrlOgld = ''
  apiUrlAvax = 'https://api.nomics.com/v1/currencies/ticker?key=f5b59998d652a0de52dc8f6718e713147699fe4b&ids=AVAX&interval=1d,30d&convert=EUR&platform-currency=AVAX&per-page=100&page=1'

  public opsyPrice: number = 0
  public ogldPrice: number = 0
  public avaxPrice: number = 0

  public opsyPriceChange: number = 0.00
  public ogldPriceChange: number = 0.00
  public avaxPriceChange: number = 0.00

  public opsyVolume30d: number = 0.00
  public ogldVolume30d: number = 0.00
  public avaxVolume30d: number = 0.00

  constructor( ) { }

  //OPSY TOKEN

  public opsyTokenChartOptions = {
    // responsive: true,
    tension: 0.4,
    scales: {
      y: {
        display:false
      },
      x: {
        display:false
      }
    },
    plugins: {
        legend: {
            display: false,
            labels: {
                color: '#02c6c6'
            }
        }
    }

  }
  public opsyTokenChartLabels:string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  public opsyTokenChartData: ChartData<'line'> = {
    labels: this.opsyTokenChartLabels,
    datasets: [
      {
        // fill: {value: 0},
        // backgroundColor: '#d2e3e3',
           // 5: fill to axis val
        data: [ 504.05 , 202.54, 125.89, 214.25, 784.23, 541.36, 363.21, 369.23, 789.56, 789.23, 985.23 ],
        borderColor: '#02c6c6',
        pointBackgroundColor: '#02c6c6',
        pointBorderColor: '#efefef'
      },
    ],
  };
  public opsyTokenChartType: ChartType = 'line';

  //OGLD TOKEN

  public ogldTokenChartOptions = {
    // responsive: true,
    tension: 0.4,
    scales: {
      y: {
        display:false
      },
      x: {
        display:false
      }
    },
    plugins: {
        legend: {
            display: false,
            labels: {
                color: '#e9d000'
            }
        }
    }

  }
  public ogldTokenChartLabels:string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  public ogldTokenChartData: ChartData<'line'> = {
    labels: this.ogldTokenChartLabels,
    datasets: [
      {
        data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        borderColor: '#e9d000',
        pointBackgroundColor: '#e9d000',
        pointBorderColor: '#efefef'
      },
    ],
  };
  public ogldTokenChartType: ChartType = 'line';

  //AVAX TOKEN

  public avaxTokenChartOptions = {
    // responsive: true,
    tension: 0.4,
    scales: {
      y: {
        display:false
      },
      x: {
        display:false
      }
    },
    plugins: {
        legend: {
            display: false,
            labels: {
                color: '#e84142'
            }
        }
    }

  }
  public avaxTokenChartLabels:string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  public avaxTokenChartData: ChartData<'line'> = {
    labels: this.avaxTokenChartLabels,
    datasets: [
      {
        data: [ 104.05 , 90.54, 75.89, 140.25, 136.23, 112.36, 124.21, 97.23, 89.56, 98.23, 150.23 ],
        borderColor: '#e84142',
        pointBackgroundColor: '#e84142',
        pointBorderColor: '#efefef'
      },
    ],
  };
  public avaxTokenChartType: ChartType = 'line';

  ngOnInit(): void {
    const opsy = axios.get(this.apiUrlOpsy)
    .then(
        response => {
          console.log('all data:',response.data[0])
          this.opsyPrice = response.data[0].price;
          this.opsyPriceChange = response.data[0]['1d'].price_change_pct *100;
          this.opsyVolume30d = response.data[0]['1d'].volume;
        }
      )
      const avax = axios.get(this.apiUrlAvax)
      .then(
          response => {
            console.log('all data:',response.data[0])
            this.avaxPrice = response.data[0].price;
            this.avaxPriceChange = response.data[0]['1d'].price_change_pct *100;
            this.avaxVolume30d = response.data[0]['1d'].volume;
          }
        )
  }

  switchOgld(): string {
    console.log('switch graph: ', this.tokenGraph, ' to ogld');
    return this.tokenGraph = 'ogld';
  }

  switchOpsy(): string {
    console.log('switch graph: ', this.tokenGraph, ' to opsy');

    return this.tokenGraph = 'opsy';
  }

  switchAvax(): string {
    return this.tokenGraph = 'avax';
  }
}

