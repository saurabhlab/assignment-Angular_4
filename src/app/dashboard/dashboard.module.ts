import { NgModule } from "@angular/core";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { CustomerListingComponent } from "app/dashboard/components/listing.component";
import { DashboardRoutingModule } from "app/dashboard/dashboard-routing.module";
import { CommonModule } from "@angular/common";
// import { MobileComponent } from './components/mobile/mobile.component';
// import { LaptopComponent } from './components/laptop/laptop.component';
// import { CameraComponent } from './components/camera/camera.component';
// import { TvComponent } from './components/tv/tv.component';
//import {  RouterModule } from "@angular/router";
import { ModalModule } from "ngx-bootstrap/modal";



@NgModule({
    imports: [CommonModule, DashboardRoutingModule,
   // RouterModule.forChild(routes)
   ModalModule.forRoot()
    ],

    declarations: [DashboardComponent,
     CustomerListingComponent,
     // MobileComponent, LaptopComponent, CameraComponent, TvComponent
      
      ],
    providers: []
})
export class DashboardModule {

}