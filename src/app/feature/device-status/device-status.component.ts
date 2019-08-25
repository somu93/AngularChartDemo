import { Component, OnInit } from '@angular/core';
import { DeviceStatusService } from './device-status.service';
import { IDeviceStatus } from './dataInterface';

@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.css']
})
export class DeviceStatusComponent implements OnInit {

  constructor(private deviceService: DeviceStatusService) { }
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
}
