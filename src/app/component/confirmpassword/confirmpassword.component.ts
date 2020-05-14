import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.css']
})
export class ConfirmpasswordComponent implements OnInit {

  id: string;
  firstpassword: string;
  confirmpassword: string;

  //3shan 
  constructor(public router: ActivatedRoute, public service: DataService, public toastr: ToastrService ,public rout:Router) { }

  ngOnInit(): void {
    //deh el activateroute bt3mlo 3shan ttl3o mn el url
    this.id = this.router.snapshot.params._id;
    console.log(this.id);

  }
  submitfunction() {
    let obj = {
      Password: this.firstpassword,
      ConfirmPassword: this.confirmpassword,
      ID: this.id
    };
    // this.service.resetpasswordfunction(obj).subscribe((res) => {
    //   this.toastr.success('done', 'success');
    // }, (error) => { console.log(error) });


    this.service.resetpasswordfunction(obj).subscribe((res) => { this.toastr.success('message', 'Done');
  this.rout.navigate(['/']) },
     (error) => { console.log(error) 
      this.toastr.error('error','error') });

  }

}
