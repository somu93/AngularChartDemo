import { Injectable } from '@angular/core';
import { IDeviceStatus } from './dataInterface';


@Injectable()
export class DeviceStatusService {

  constructor() { }

  ELEMENT_DATA: IDeviceStatus[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', danger: 'danger'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', danger: 'notDanger'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', danger: 'danger'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', danger: null},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', danger: 'notDanger'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', danger: 'danger'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', danger: 'notDanger'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', danger: 'notDanger'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', danger: 'danger'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', danger: 'notDanger'},
  ];

  deviceList() {
    return new Promise((resolve) => {
          resolve(this.ELEMENT_DATA);
    });
  }

  deviceTableColumnName(){
    return  ['position', 'name', 'weight', 'symbol'];
  }
}
