import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "app/layout/layout.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
           {           
                path: '',
                redirectTo:'/dashboard',
                pathMatch:'full'
            },
           
            {           
                path: 'dashboard',
                loadChildren: '../dashboard/dashboard.module#DashboardModule'
            },
              {           
                path: 'myapp',
                loadChildren: '../myApp/myapp.module#MyAppModule'
            },
            {
                path: 'forms',
                loadChildren: '../forms/forms.module#MyFormModule'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {

}