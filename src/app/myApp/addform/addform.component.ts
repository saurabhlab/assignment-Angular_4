import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { States,Cities } from "app/myApp/addform/stateCity.component";
 import {CalendarModule} from 'primeng/primeng';


@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
  private router:Router,
  private http:HttpClient
  )
   {this.createForm();  }


 vName: string = '';
    vAge: number;
    vDOB: string = '';
    vState: string = '';
    vCity: string = '';
    vGender: string = '';

    req = "this filed is required"

frm: FormGroup;
createForm() {
        this.frm = this.fb.group({
             Name: ['', Validators.required],
            Age: ['', Validators.required],
            DOB: '',
            State: '',
            City: '',
            Gender: '',
         
          })
          }

States;
Cities;
  ngOnInit() {
     this.States = States;
    this.Cities = Cities;
  }




 onSave(data){
       
console.log("user data", data);
        this.vName = data.Name;
        this.vAge = data.Age;
        this.vDOB = data.DOB;
        this.vState = data.State;
        this.vCity = data.City;
        this.vGender = data.Gender;

    }

backtoindex(){
     this.router.navigate(['/myapp/mobile']);
}

}




//------------------------------------------------------
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { Router } from "@angular/router";
// import { HttpClient } from "@angular/common/http";
// import { HttpHeaders } from "@angular/common/http";

// @Component({
//   selector: 'app-addform',
//   templateUrl: './addform.component.html',
//   styleUrls: ['./addform.component.css']
// })
// export class AddFormComponent implements OnInit {

//   constructor(private fb: FormBuilder,
//   private router:Router,
//   private http:HttpClient
//   )
//    {this.createForm();  }


//  vName: string = '';
//     vPrice: number;
//     vSpeci: string = '';
//     req = "this filed is required"

// frm: FormGroup;
// createForm() {
//         this.frm = this.fb.group({
//             Name: ['', Validators.required],
//             Price: ['', Validators.required],
//             Speci: ''
//           })
//           }


//   ngOnInit() {
//   }




//  onSave(data){
//         // console.log("user data", data);
//         // this.vName = data.Name;
//         // this.vPrice = data.Price;
//         // this.vSpeci = data.Speci;


//   //   const body = {"name": "Brad",
//   // "Price":2000,
//   // "Speci":"hellooooooooooooo"  
//   // };

//       // const body = {name: 'Brad'};

// const  headers= new Headers();
// headers.append('Content-Type','application/json; charset=utf-8');

//   this.http.post('http://localhost:3000/mobiledata', 
//   // JSON.stringify(data), headers
//  data 
//    )
//   // {
//   //   headers: new HttpHeaders().set('Content-Type', 'application/json'),
//   // }
 
//   .subscribe(
//     ()=>{},
//     err=>console.error(err)
//   );
// //rq.subscribe();

//     }

// backtoindex(){
//      this.router.navigate(['/myapp/mobile']);
// }



// }
