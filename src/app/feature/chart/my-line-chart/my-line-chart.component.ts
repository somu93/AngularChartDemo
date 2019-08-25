import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    elements : {
      line : {
        tension : 0
      }
    }
    
  };

  public lineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {data: [65,30,35,47, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28,32,37,34, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit() {
  }

}
