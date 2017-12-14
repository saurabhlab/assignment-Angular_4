import { Component } from "@angular/core";

@Component({
    template: `
            <div id="wrapper">
                <header-component></header-component>
                <div class="container-fluid">
                    <div class="row">
                        <sidebar-component class="col-lg-2 " ></sidebar-component>
                        <main class="col-lg-9 col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3 ">

 

            

                            <router-outlet></router-outlet>
                        </main> 
                    </div>                 
                </div>
            </div>
    `,
    styles: []
})
export class LayoutComponent {

}