import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartRouterModule } from './chart-router.module';
import { ChartComponent } from './chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ChartComponent,
    ChartRouterModule.comps
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ChartRouterModule
  ]
})
export class ChartModule {

}
