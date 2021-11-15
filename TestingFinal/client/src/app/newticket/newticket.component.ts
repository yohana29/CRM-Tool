import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../_services/customer.service';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-newticket',
  templateUrl: './newticket.component.html',
  styleUrls: ['./newticket.component.css']
})
export class NewticketComponent implements OnInit {
  modelnewticket: any = {}
  constructor(private employeeservice: EmployeeService, private customerservice: CustomerService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  createticket() {
    this.customerservice.createticket(this.modelnewticket).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/customer');
    }, error => {
      console.log(error);
      this.toastr.error(error.error)
    })
  }

  logout() {
    //added for persisting login
    this.employeeservice.logout();
    localStorage.removeItem('customer');
    this.router.navigateByUrl('/');

  }


  cancel() {
    console.log('cancel-test')
  }
}
