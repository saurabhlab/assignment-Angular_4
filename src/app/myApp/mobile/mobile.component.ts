import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(
    // private mobileService:MobileService,
    private router:Router,
  private http: HttpClient
  ) { }
mobileData;

ser;
//   ngOnInit() {
//     this.mobileData=Mobiles;
// this.ser=this.mobileService.getData();

// console.log("mob comp",this.ser);

//   }

ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/mobiledata').subscribe(data => {
      // Read the result field from the JSON response.
     // this.results = data['results'];
this.mobileData=data;
      console.log("get method mobileData",this.mobileData);
    },
    (err:HttpErrorResponse)=>{
      this.mobileData=Mobiles;
      console.log("run JSON server to get data from json file",err.message);
    });
  }

 addForm() {
        this.router.navigate(['/myapp/addform']);
    }


  
}


class Mobile {
  constructor(

    Name: string,
    Price: number,
    Speci: string

  ) { }
}

const Mobiles: Mobile[] = [
  { Name: 'Apple Iphone 7', Price: 50000, Speci: 'The phone comes with a 4.70-inch touchscreen display with a resolution of 750 pixels by 1334 pixels at a PPI of 326 pixels per inch.' },
  { Name: 'Samsung Galaxy S3 ', Price: 36000, Speci: 'Android 4.0.4, 4.3. 16/32/64GB storage, microSD card slot. 3.9% 66,050,730 hits. 1886 Become a fan. 4.8" 720x1280 pixels. 8MP. 1GB RAM. Exynos 4412 Quad. 2100mAh.' },
  { Name: 'Oppo F1', Price: 20000, Speci: 'The phone comes with a 5.00-inch touchscreen display with a resolution of 720 pixels by 1280 pixels at a PPI of 294 pixels per inch.' },
  { Name: 'Asus ZenFone 5', Price: 15500, Speci: ' The Asus ZenFone 5 is powered by 1.6GHz dual-core Intel Atom Z2560 processor and it comes with 2GB of RAM.' },
  { Name: 'Vivo Y15', Price: 13000, Speci: ' The phone comes with a 4.50-inch touchscreen display with a resolution of 480 pixels by 854 pixels at a PPI of 218 pixels per inch' },
  { Name: 'LG G3', Price: 18000, Speci: 'Android 4.4.2, up to 6.0. 16GB storage, microSD card slot. 4.8% 29,043,846 hits. 2110 Become a fan. 5.5" 1440x2560 pixels. 13MP. 2160p. 3GB RAM. Snapdragon 801. 3000mAh.' },
  { Name: 'Moto G4 +', Price: 14000, Speci: 'The phone comes with a 5.50-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 401 pixels per inch.' },
  { Name: 'Videocon  Z50 Nova', Price: 7000, Speci: 'he phone comes with a 5.00-inch touchscreen display with a resolution of 540 pixels by 960 pixels' },
  { Name: 'Apple iPhone 6s', Price: 33000, Speci: 'Features 4.7″ LED-backlit IPS LCD display, Apple A9 chipset, 12 MP primary camera, 5 MP front camera, ' },
  { Name: 'Nokia E5-00', Price: 8000, Speci: ' Display. 2.36-inch. Processor. 600MHz. Front Camera. No. Resolution. 240x320 pixels. RAM. 256MB. OS. Symbian. Storage. 250MB. Rear Camera. 5-megapixel.' },

];
