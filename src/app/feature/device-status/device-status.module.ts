import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceStatusComponent } from './device-status.component';
import { DeviceStatusRoutingModule } from './device-status-routing.module';
import { DeviceStatusService } from './device-status.service';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [DeviceStatusComponent],
  providers: [DeviceStatusService],
  imports: [
    CommonModule,
    DeviceStatusRoutingModule,
    CdkTableModule,
    MatTableModule
  ]
})
export class DeviceStatusModule { }
