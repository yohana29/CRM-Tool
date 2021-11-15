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
  modeladmin: any = {}
  username: any;
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
    var data = JSON.parse(localStorage.getItem('employee'));
    this.username = data.username;

    this.employeeservice.adminticketview(this.username).subscribe(response => {
      console.log(this.username)
      console.log(response);
      this.adticketsview = response;
    }, error => {
      console.log(error);
    })
  }

  ticketack(dataItem) {
    this.modeladmin = dataItem.id;
    console.log(this.modeladmin);
    this.employeeservice.adminticketack(this.modeladmin).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })

  }

  home() {
    this.viewtickets = false
  }



}
