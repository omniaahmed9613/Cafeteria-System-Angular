import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
//lma a3ozha twrs mn interface bktb implements
export class InterseptorService implements HttpInterceptor {
  constructor(private cookie:CookieService) { }
  //2ota3 tor2
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {

    //throw new Error("Method not implemented.");
    //tyb ma hwa keda by tcheck 3la el sandwich
     if( this.cookie.check('auth-token'))
     {//HENA ZWDNA HEADER SMNAH AUTHTOKEN W B3TNALO EL COOKIE 3LASHH NGHER FL REQ EL REQ EL ASLYA
       const Req=req.clone({setHeaders:{'auth-token':this.cookie.get('auth-token')}});
       return next.handle(Req)
     }
     else{
       return next.handle(req);
     }

      
  }
}
//service 
