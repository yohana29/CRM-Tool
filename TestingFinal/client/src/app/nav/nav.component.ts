import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../_model/customer';
import { EmployeeService } from '../_services/employee.service';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  modelcust: any = {}

  constructor(public employeeservice: EmployeeService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.employeeservice.login(this.modelcust).subscribe(response => {
      this.router.navigateByUrl('/admin');
     }, error => {
      console.log(error);
      this.toastr.error(error.error);
     })
  }

  logout() {
    //added for persisting login
    this.employeeservice.logout();
    localStorage.removeItem('customer');
    this.router.navigateByUrl('/');

  }

}

