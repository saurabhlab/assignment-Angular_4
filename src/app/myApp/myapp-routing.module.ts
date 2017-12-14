import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";
import { MyAppComponent } from "app/myApp/myapp.component";
import { MobileComponent } from "app/myApp/mobile/mobile.component";
import { LaptopComponent } from "app/myApp/laptop/laptop.component";
import { CameraComponent } from "app/myApp/camera/camera.component";

import { AddFormComponent } from "app/myApp/addform/addform.component";




const myApproutes: Routes = [
    // {
    //     path: ''
    //     , component: MyAppComponent
    //     , children: [
    //         //  { path: '', component: CustomerListingComponent }
    //          { path: '', component: MyAppComponent },

    //         //{ path: 'list', component: CustomerListingComponent },
    //          { path: 'mobile', component: MobileComponent },
    //          { path: 'laptop', component: LaptopComponent },
    //          { path: 'camera', component: CameraComponent },
    //          { path: 'tv', component: TvComponent }

    //     ]
    // }


 {
    path: '',
    component: MyAppComponent,
    
    children: [
      {
        path: '',
        children: [
              { path: 'mobile', 
          component: MobileComponent },
          { path: 'camera', 
          component: CameraComponent },
           { path: 'addform', 
          component: AddFormComponent },
          { path: 'laptop', component: LaptopComponent },
          { path: '', component: MobileComponent }
        ]
      }
    ]
  }

];

@NgModule({
    imports: [RouterModule.forChild(myApproutes)],
    exports: [RouterModule]
})
export class MyAppRoutingModule {

}