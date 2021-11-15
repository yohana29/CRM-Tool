import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Admin } from './_model/admin';
import { Customer } from './_model/customer';
import { CustomerService } from './_services/customer.service';
import { EmployeeService } from './_services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  customers: any

  constructor(private http: HttpClient, private customerService: CustomerService, private employeeService: EmployeeService) { }

  ngOnInit() {
    //added for persisting login
    //this.getUsers();
    this.setCurrentCustomer();
  }
  //added for persisting login
  setCurrentCustomer() {
    const customer: Customer = JSON.parse(localStorage.getItem('customer'));
    this.customerService.setCurrentCustomer(customer);
  }

  setCurrentEmployee() {
    const employee: Admin = JSON.parse(localStorage.getItem('employee'));
    this.employeeService.setCurrentEmployee(employee);
  }


//  getUsers() {
//    this.http.get('https://localhost:44317/api/Customer').subscribe(response => {
//      this.customers = response;
//    }, error => {
//      console.log(error);
//    })
//  }
}
