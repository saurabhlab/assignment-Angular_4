import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { CustomerListingComponent } from "app/dashboard/components/listing.component";


const routes: Routes = [
    {
        path: ''
        , component: DashboardComponent
        , children: [
            //  { path: '', component: CustomerListingComponent }
             { path: '', component: DashboardComponent }

            // { path: 'list', component: CustomerListingComponent },
            // { path: 'mobile', component: MobileComponent },
            // { path: 'laptop', component: LaptopComponent },
            // { path: 'camera', component: CameraComponent },
            // { path: 'tv', component: TvComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}