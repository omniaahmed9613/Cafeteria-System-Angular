import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';
import { strict } from 'assert';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
  obj: any;
  constructor(public service: DataService, public toastr: ToastrService) { }
  ngOnInit(): void {
    this.service.vieworderfunction().subscribe((res) => {
      this.obj = res.body;
      //console.log(this.obj);
    }, (error) => { console.log(error) });
  }

  oncilckfunction(omnia: string) {

   // console.log(omnia);
    this.service.Donefunction(omnia).subscribe((res) => {
      this.toastr.success('donemessage', 'done')
    },
      (error) => { console.log(error) });
  }

}
