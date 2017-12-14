import { Component } from "@angular/core";

@Component({
    template: `

 

    <a class="btn btn-small btn-default" routerLink="mobile">Mobile</a>
    <a class="btn btn-small btn-default" routerLink="laptop">Laptop</a>
    <a class="btn btn-small btn-default" routerLink="camera">Camera</a>
   <router-outlet></router-outlet>
<!--
 <div class="row">
        <div class="col-lg-3 col-xs-6">
          
        
        
          <div class="small-box bg-aqua">
            <div class="inner">
              <h3>Mobile</h3>

              <p>Mobile</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a routerLink="mobile" class="small-box-footer">Mobile <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
       
        <div class="col-lg-3 col-xs-6">
          
          <div class="small-box bg-green">
            <div class="inner">
              <h3>Laptop<sup style="font-size: 20px">%</sup></h3>

              <p>Laptop</p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
            <a routerLink="laptop" class="small-box-footer">Laptop <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
       
       
      </div>










       <!-- <router-outlet></router-outlet>-->
    `,
})
export class MyAppComponent {

}