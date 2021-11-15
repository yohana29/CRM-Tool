import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../_services/customer.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']
})
export class CustomerpageComponent implements OnInit {
  viewtickets: boolean
  custticketsview: any;
  custid: string;
  constructor(public employeeservice: EmployeeService, public customerservice: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    //added for persisting login
    this.employeeservice.logout();
    localStorage.removeItem('customer');
    this.router.navigateByUrl('/')
  }

  customerviewtickets() {
    this.viewtickets = true
    var data = JSON.parse(localStorage.getItem('customer'));
    this.custid = data.customerId;

    this.customerservice.customerticketview(this.custid).subscribe(response => {
      console.log(this.custid)
      console.log(response);
      this.custticketsview = response;
    }, error => {
      console.log(error);
    })
  }

  home() {
    this.viewtickets = false
  }
    

}
