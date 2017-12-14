import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { PageNotFountComponent } from "app/pagenotfound.component";
import { AuthGuard } from "app/core/guards/auth.guard";
import { AuthService } from "app/core/services/auth.service";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
// import {CalendarModule} from 'primeng/primeng';
//import {CalendarModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFountComponent
  ],
  imports: [
    BrowserModule,     
     HttpClientModule,
    RouterModule,
 BrowserAnimationsModule,
 //CalendarModule,
    ToastrModule.forRoot(),
    HttpModule,
    AppRoutingModule,
    // CalendarModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
