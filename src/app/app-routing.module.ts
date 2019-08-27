import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path: 'chart', loadChildren: () => import(`./feature/chart/chart.module`).then(m => m.ChartModule)},
  {path: 'device', loadChildren: () => import(`./feature/device-status/device-status.module`).then(m => m.DeviceStatusModule)},
  {path: '', redirectTo : '/device', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
