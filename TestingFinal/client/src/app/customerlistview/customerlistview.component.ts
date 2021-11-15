import { Component, OnInit,Input } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { EmployeeService } from '../_services/employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-customerlistview',
  templateUrl: './customerlistview.component.html',
  styleUrls: ['./customerlistview.component.css']
})
export class CustomerlistviewComponent implements OnInit {

  constructor(private employeeservice: EmployeeService, private customerservice: CustomerService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
