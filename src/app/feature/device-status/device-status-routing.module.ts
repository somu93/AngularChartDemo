import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DeviceStatusComponent } from './device-status.component';
import { MatTableModule } from '@angular/material';

const Route: Routes = [
   {path: '', component: DeviceStatusComponent}
];

@NgModule({
   imports : [
    RouterModule.forChild(Route),
    MatTableModule
   ],
   exports: [RouterModule]
})
export class DeviceStatusRoutingModule {
}
