import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
//import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  Role: string;
  UserName: string;
  // helper = new JwtHelperService();

  //inject httpclient in serivce
  constructor(private http: HttpClient, public cookie: CookieService) { }
  loginfunction(mona: FormData) {
    //observe deh b access beha el response bta3ty 
    return this.http.post('http://localhost:5000/account/login', mona, { observe: 'response', withCredentials: true });
  }
  checktooken() {
    if (this.cookie.get('auth-token') && this.Role == 'Admin') {

      return true;
    }
    else {
      return false;
    }
  }
  checkuser() {
    if (this.cookie.get('auth-token') && this.Role == 'User') {
      return true;
    }
    else { return false; }
  }
  ////////////////////////////////////////////////////////////////addproduct//////////////////////////////////////////////////////////
  addproductfunction(newproduct: FormData) {
    return this.http.post('http://localhost:5000/product/add', newproduct, { observe: 'response', responseType: 'text' });
  }
  ///////////////////////////////////////////////////////////////get products from server////////////////////////////////////////////////
  getproductfunction() {
    return this.http.get('http://localhost:5000/product/get', { observe: 'response' });
  }
  ///////////////////////////////////////////////////////////sendorderfunction////////////////////////////////////////////////////////
  sendorderfunction(obj: any) {
    return this.http.post('http://localhost:5000/order/send', obj, { observe: 'response', responseType: 'text' });
  }
  ///////////////////////////////////////////////////////////vieworder/////////////////////////////////////////////////////////////
  vieworderfunction() {
    return this.http.get('http://localhost:5000/order/view', { observe: 'response' });
  }
  //////////////////////////////////////////////////////////put done///////////////////////////////////////////////////////////////
  Donefunction(id: string) {
    console.log(id);
    return this.http.put('http://localhost:5000/order/change', { orderid: id }, { observe: 'response', responseType: 'text' });
  }

  ///////////////////////////////////////////////////////////adduser////////////////////////////////////////////////////////////////////
  adduserfunction(fd: FormData) {
    return this.http.post('http://localhost:5000/account/adduserbyadmin', fd, { observe: 'response' ,responseType:'text'});
  }

  //////////////////////////////////////////////////////////////ForgetPassword////////////////////////////////////////////////////////
  submitfunctionsooghnona(soad: any) {
    return this.http.post('http://localhost:5000/account/forgetpassword', soad,{observe:'response',responseType:'text'} )
  }
  /////////////////////////////////////////////////////////////////////confirmpassword//////////////////////////////////////////////
  resetpasswordfunction(obi:any){
    console.log(obi);
        return this.http.post('http://localhost:5000/account/reset',obi,{observe:'response',responseType:'text'})
  }


}
