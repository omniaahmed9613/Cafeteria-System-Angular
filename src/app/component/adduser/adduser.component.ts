import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(public service:DataService , public toastr:ToastrService) { }

  ngOnInit(): void {}
    
     FG =new FormGroup({
     
      Email:new FormControl(''),
      Password:new FormControl('')      
    });

  
    addsumbit()
    {
      var FD =new FormData()
      FD.append('Email',this.FG.get('Email').value);
      FD.append('Password',this.FG.get('Password').value); 

      this.service.adduserfunction(FD).subscribe((res)=>{
        this.toastr.success('Done','this user addto user table')
      
      },//(error)=>{this.toastr.error(error.error)}
      (error)=>{console.log(error)}
       
       
        )


    }


  


}


