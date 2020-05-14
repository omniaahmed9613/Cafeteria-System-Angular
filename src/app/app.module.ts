import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { from } from 'rxjs';
import { LogincomponentComponent } from './component/logincomponent/logincomponent.component';
//import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { AddproudctComponent } from './component/addproudct/addproudct.component';
import { ViewproudctComponent } from './component/viewproudct/viewproudct.component';
import { AdduserComponent } from './component/adduser/adduser.component';
import { ViewuserComponent } from './component/viewuser/viewuser.component';
import { InterseptorService } from './service/interseptor.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { browser } from 'protractor';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
//import { ComponentComponent } from './vieworder/component/component.component';
import { VieworderComponent } from './component/vieworder/vieworder.component';
import { ForgetPasswodComponent } from './component/forget-passwod/forget-passwod.component';
import { ConfirmpasswordComponent } from './component/confirmpassword/confirmpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent,
    // AdminDashboardComponent,
    AdmindashboardComponent,
    AddproudctComponent,
    ViewproudctComponent,
    AdduserComponent,
    ViewuserComponent,
    UserdashboardComponent,
    //ComponentComponent,
    VieworderComponent,
    ForgetPasswodComponent,
    ConfirmpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({  timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,})

  ],
  providers: [CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterseptorService,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
