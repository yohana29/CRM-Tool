import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../_services/customer.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-logintest',
  templateUrl: './logintest.component.html',
  styleUrls: ['./logintest.component.css']
})
export class LogintestComponent implements OnInit {
  modelcust: any = {};
  registermode = false;

  constructor(private http: HttpClient, public customerservice: CustomerService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  registertoggle() {
    this.registermode = !this.registermode;
  }

  login() {
    this.customerservice.login(this.modelcust).subscribe(response => {
      this.router.navigateByUrl('/customer');
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  logout() {
    //added for persisting login
    this.customerservice.logout();
    localStorage.removeItem('customer');
    this.router.navigateByUrl('/');
  }

  cancelRegisterfromRegister(event: boolean) {
    this.registermode = event;
  }

}
