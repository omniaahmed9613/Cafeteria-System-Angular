import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproudct',
  templateUrl: './addproudct.component.html',
  styleUrls: ['./addproudct.component.css']
})
export class AddproudctComponent implements OnInit {

  constructor(public service: DataService, public router: Router, public toastr: ToastrService) { }

  img: File;

  ngOnInit(): void {
  }
  addproductform = new FormGroup({
    ProductName: new FormControl(''),
    ProductPrice: new FormControl('')
  })

  addsumbit() {
    var FD = new FormData();

    //console.log(this.addproductform.get('ProductName').value);
    FD.append('ProductName', this.addproductform.get('ProductName').value);
    FD.append('ProductPrice', this.addproductform.get('ProductPrice').value);
    FD.append('Image', this.img, this.img.name);
    console.log(FD);
    this.service.addproductfunction(FD).subscribe((res) => {
      var obj = res.body;
      //this.router.navigate(['/product/add']);
    }, (error) => { this.toastr.error(error.error, 'error') });
  }
  // var FD=new FormData()
  //mynf3sh ab3t el token ka cookie lazem header 
  //httpinterseptor middleware ng g service implemnt interface http inseptor gwaha check token 


  onchange(e) {
    this.img = e.target.files[0];
  }


}