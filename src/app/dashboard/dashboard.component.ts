import { Component } from "@angular/core";

@Component({
    template: `
 
 <!--
    <a  routerLink="list">list</a>
    <a  routerLink="mobile">Mobile</a>
    <a  routerLink="laptop">Laptop</a>
    <a  routerLink="camera">Camera</a>
    <a  routerLink="tv">Tv</a>
-->


<section class="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>
<div class="row">
       
       <div class="col-lg-6 col-xs-6" >
          <!-- small box -->
        
        
          <div class="small-box bg-aqua" style="height:250px">
            <div class="inner">
              <h3>My App</h3>

              <p>Assignment</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a [routerLink]="['/myapp']" class="small-box-footer">myapp <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
      

        <div class="col-lg-6 col-xs-6">
        
        
        
          <div class="small-box bg-yellow"  style="height:250px">
            <div class="inner">
              <h3>forms</h3>

              <p>New forms</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a [routerLink]="['/forms']" class="small-box-footer">TCformsS <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
  
        <div class="col-lg-6 col-xs-6">
 
        
        
          <div class="small-box bg-red"  style="height:250px">
            <div class="inner">
              <h3>Chart</h3>

              <p>New Chart</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a routerLink="tcs" class="small-box-footer">Chart <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
     
       <div class="col-lg-6 col-xs-6">

        
        
          <div class="small-box bg-green"  style="height:250px">
            <div class="inner">
              <h3>Export</h3>

              <p> Export</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a href="Export" class="small-box-footer">Export <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>

        </div>
  
       




 <!--
<li class="nav-item" routerLinkActive="active">
            <a class="nav-link" [routerLink]="['/myapp']">
                <i class="fa fa-circle-o" aria-hidden="true"></i> MyApp
            </a>
        </li>


<a class="nav-link" [routerLink]="['/dashboard']">
                <i class="fa fa-code" aria-hidden="true"></i> dashboard
            </a>
<a class="nav-link" [routerLink]="['/forms']">
                <i class="fa fa-code" aria-hidden="true"></i> Forms
            </a>




       <router-outlet></router-outlet>-->
    `,
})
export class DashboardComponent {

}