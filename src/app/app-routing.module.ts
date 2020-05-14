import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogincomponentComponent } from './component/logincomponent/logincomponent.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { AuthGuard } from './auth.guard';
import { AddproudctComponent } from './component/addproudct/addproudct.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { UserGuard } from './user.guard';
import { VieworderComponent } from './component/vieworder/vieworder.component';
import { AdduserComponent } from './component/adduser/adduser.component';
import { ForgetPasswodComponent } from './component/forget-passwod/forget-passwod.component';
import { ConfirmpasswordComponent } from './component/confirmpassword/confirmpassword.component';


const routes: Routes = [
{path:'',component:LogincomponentComponent},
{path:'admin/dashboard',component:AdmindashboardComponent,canActivate:[AuthGuard]},
{path:'user/dashboard',component:UserdashboardComponent,canActivate:[UserGuard]},
{path:'user/dashboard/:token',component:UserdashboardComponent},
{path:'product/add',component:AddproudctComponent,canActivate:[AuthGuard]},//lazem ykon zay el routerlink
{path:'order/view',component:VieworderComponent,canActivate:[AuthGuard]},
{path:'user/add',component:AdduserComponent,canActivate:[AuthGuard]}, 
{path:'login/forgetpassword',component:ForgetPasswodComponent},
{path:'user/confirmpassword/:_id',component:ConfirmpasswordComponent},




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

