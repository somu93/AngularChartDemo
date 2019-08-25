import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { ChartComponent } from './chart.component';

/**
 * This is child Routes
 */

const childRoutes: Routes = [
  { path: 'bar-chart', component: MyBarChartComponent },
  { path: 'doughnut-chart', component: MyDoughnutChartComponent },
  { path: 'radar-chart', component: MyRadarChartComponent },
  { path: 'pie-chart', component: MyPieChartComponent },
  { path: 'line-chart', component: MyLineChartComponent },
  { path: '', redirectTo: 'bar-chart', pathMatch: 'full' },
  { path: '**', redirectTo: 'bar-chart', pathMatch: 'full' }
];

/**
 * This is Main Routes For Chart
 */
const routes: Routes = [
  { path: '', component: ChartComponent, children: childRoutes }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRouterModule {
  static comps = [
    MyDoughnutChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
    MyLineChartComponent,
    MyBarChartComponent
  ];
}
