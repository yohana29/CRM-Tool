import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  viewtickets: boolean
  adticketsview: any;
  constructor(private employeeservice: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    //added for persisting login
    this.employeeservice.logout();
    localStorage.removeItem('employee');
    this.router.navigateByUrl('/');

  }

  adminviewtickets() {
    this.viewtickets = true

    this.employeeservice.adminticketview().subscribe(response => {
      console.log(response);
      this.adticketsview = response;
    }, error => {
      console.log(error);
    })
  }

  home() {
    this.viewtickets = false
  }



}
