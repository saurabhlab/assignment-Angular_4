import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { CameraComponent } from './camera/camera.component';

import { MyAppRoutingModule } from "app/myApp/myapp-routing.module";
import { ModalModule } from "ngx-bootstrap/modal";
import { MyAppComponent } from "app/myApp/myapp.component";

import { AddFormComponent } from "app/myApp/addform/addform.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/primeng";

//import {ChartModule} from 'primeng/primeng';
//import {MenuItem} from 'primeng/components/common/api';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

  CalendarModule,
 // ChartModule,
    MyAppRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [MyAppComponent,MobileComponent, LaptopComponent, CameraComponent, AddFormComponent],


})
export class MyAppModule { }
