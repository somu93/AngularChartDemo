import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultChildComponent } from './feature/default-child/default-child.component';


const routes: Routes = [
  {path: 'chart', loadChildren: () => import(`./feature/chart/chart.module`).then(m => m.ChartModule)},
  {path: 'default',component: DefaultChildComponent},
  {path: '', redirectTo : '/chart', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
