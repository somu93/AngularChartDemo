import { Component, OnInit } from '@angular/core';
import { DeviceStatusService } from './device-status.service';
import { IDeviceStatus } from './dataInterface';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RepositoryComponent } from './repository/repository.component';

@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.css']
})
export class DeviceStatusComponent implements OnInit {

  constructor(private deviceService: DeviceStatusService,private dialog: MatDialog,) { }
  public dataSource: IDeviceStatus[];
  ngOnInit() {
      this.deviceService.deviceList().then(val => {
          console.log('data is coming', val);
          this.showDeviceInTable(val);
      });
  }

  get DeviceColumnName() {
    return this.deviceService.deviceTableColumnName();
  }

  showDeviceInTable(data) {
     this.dataSource = data;
  }

  selectRepository() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
          id: 1,
          title: 'Select Repository',
          repository : this.deviceService.Respository()
      };
      const dialogRef = this.dialog.open(RepositoryComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(
        data => console.log(' Dialog output:', data)
      );
  }


}
