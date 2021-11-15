import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CustomerlistviewComponent } from './customerlistview/customerlistview.component';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { LogintestComponent } from './logintest/logintest.component';
import { NavComponent } from './nav/nav.component';
import { NewticketComponent } from './newticket/newticket.component';
import { ResisterComponent } from './resister/resister.component';
import { AuthGuard } from './_routeguards/auth.guard';

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'register', component: ResisterComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminpageComponent },
  { path: 'customer', component: CustomerpageComponent, canActivate: [AuthGuard] },
  { path: 'newticket', component: NewticketComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LogintestComponent, canActivate: [AuthGuard] },
  { path: 'customerview', component: CustomerlistviewComponent, canActivate: [AuthGuard] },
  { path: '**', component: NavComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
