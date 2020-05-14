import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})

export class UserdashboardComponent implements OnInit {

  constructor(public service: DataService, private toastr: ToastrService ,public router:ActivatedRoute ,public cookie:CookieService  )  { }
  Products: any;
  selectedProducts: Array<any> = [];
  tkoken:string;
  //haga ana b intializaha w b3d keda bttgher [()] o/i/put
  //productQuantity: number = 0;
  //productMultiplicatePrice: number = 0;

  // obj={
  //   x:this.selectedProducts,
  //   UserName:this.service.UserName
  // }
  ngOnInit(): void {
    this.service.getproductfunction().subscribe((res) => {
      this.Products = res.body;
  if  (this.router.snapshot.params.token)
  {
    this.cookie.set('auht-token',this.router.snapshot.params.token)
  }
      


      

    });
  }
  addfunction(product) {
    if (!this.selectedProducts.find(x => x._id == product._id)) {
      this.selectedProducts.push({
        ProductName: product.ProductName,
        ProductPrice: product.ProductPrice,
        ProductQuantity:1,
        ProductMultiplicatePrice:product.ProductPrice
      });
      // this.incrementfunction(this.selectedProducts[this.selectedProducts.length - 1]);
    }
  }
  incrementfunction(product) {
    product.ProductQuantity++;
    product.ProductMultiplicatePrice = product.ProductQuantity * product.ProductPrice;
    
  }
  decrementfunction(product) {
    if(product.ProductQuantity>1)
    {
      product.ProductQuantity--;
      product.ProductMultiplicatePrice = product.ProductQuantity * product.ProductPrice;
    }
    
  
  
  }
  ordercancelled(product) {
    
   this.selectedProducts=this.selectedProducts.filter(x => x.ProductName != product.ProductName);

  }
  confirmfunction() {
    var obj: any = {
      x: this.selectedProducts,
      UserName: this.service.UserName
    }
    this.service.sendorderfunction(obj).subscribe((res) => {
      this.toastr.success('ordersend', 'success');
    }, (error) => { console.log(error) });
  }
}
