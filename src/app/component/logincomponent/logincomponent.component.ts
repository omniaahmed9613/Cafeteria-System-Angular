import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  constructor(public service:DataService,public router:Router) {}

  logindata  =new FormGroup({
    Email:new FormControl(''),
  Password:new FormControl('')
  });
  loginsubmit()
  {
   var FD= new FormData() ;
  //  name da el bdwr 3leh hnak fl server fl schema
  //email el tanya da esm el form control el fe html 
  //console.log(this.logindata.get('Email').value);
   FD.append('Email',this.logindata.get('Email').value);
   FD.append('Password',this.logindata.get('Password').value);

   //console.log(FD);
     var obj;

   this.service.loginfunction(FD).subscribe((res)=>{

     obj=res.body
     this.service.Role=obj.Role;
     this.service.UserName=obj.Name;
     if(obj.Role =='Admin'){
       //console.log('hi');
      // console.log(obj);
       this.router.navigate(['/admin/dashboard']);
      
   }
   else{
     this.router.navigate(['/user/dashboard']);
   }
  
  }
   ,(error)=>{console.log(error)});   
  }
  ngOnInit(): void {
  }
}
//form group feha controllers