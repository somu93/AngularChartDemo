import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceStatusComponent } from './device-status.component';
import { DeviceStatusRoutingModule } from './device-status-routing.module';
import { DeviceStatusService } from './device-status.service';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MatIconModule,  MatDialogModule } from '@angular/material';
import { RepositoryComponent } from './repository/repository.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule, MatToolbarModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [DeviceStatusComponent, RepositoryComponent],
  entryComponents:[RepositoryComponent],
  providers: [DeviceStatusService],
  imports: [
    CommonModule,
    DeviceStatusRoutingModule,
    CdkTableModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    OverlayModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule

  ]
})
export class DeviceStatusModule { }
