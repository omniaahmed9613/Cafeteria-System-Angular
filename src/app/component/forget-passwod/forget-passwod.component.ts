import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-passwod',
  templateUrl: './forget-passwod.component.html',
  styleUrls: ['./forget-passwod.component.css']
})
export class ForgetPasswodComponent implements OnInit {

  constructor(  public service:DataService ,public toastr:ToastrService )  { }

  ngOnInit(): void {
  }
  EmailAddress:string;
   obj={};
  submitfunction()
  {
    this.obj={
      Email:this.EmailAddress
    };
    this.service.submitfunctionsooghnona(this.obj).subscribe((res) => {
      this.toastr.success('ordersend', 'success');
    }, (error) => { console.log(error) });
  }
}
