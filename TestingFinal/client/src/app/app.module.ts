import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { AgGridModule } from 'ag-grid-angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LogintestComponent } from './logintest/logintest.component';
import { ResisterComponent } from './resister/resister.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { NewticketComponent } from './newticket/newticket.component';
import { CustomerlistviewComponent } from './customerlistview/customerlistview.component';
import { ToastrModule } from 'ngx-toastr'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogintestComponent,
    ResisterComponent,
    AdminpageComponent,
    CustomerpageComponent,
    NewticketComponent,
    CustomerlistviewComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([CustomerlistviewComponent]),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
