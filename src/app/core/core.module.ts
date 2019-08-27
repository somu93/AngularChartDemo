import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    MyNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports:[
    MyNavComponent
  ]
})
export class CoreModule { }
