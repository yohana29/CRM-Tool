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
  viewticketsassignment: boolean

  //for html
  adticketsview: any;
  adticketsassignment: any;
  admindelete: any;

  modeladmin: any = {}
  ticketid: any = {}
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

  adminviewassignment() {
    this.viewticketsassignment = true
    var data = JSON.parse(localStorage.getItem('employee'));
    this.username = data.username;

    this.employeeservice.adminticketassignmentview(this.username).subscribe(response => {
      console.log(this.username)
      console.log(response);
      this.adticketsassignment = response;
    }, error => {
      console.log(error);
    })

  }

  adminviewticketbutton(dataItem) {
    this.viewticketsassignment = false
    this.viewtickets = true
    this.ticketid = dataItem.ticketid;

    this.employeeservice.adminticketviewdetailed(this.ticketid).subscribe(response => {
      console.log(this.ticketid);
      console.log(response);
      this.adticketsview = response;
    }, error => {
      console.log(error);
    })



  }


  //adminviewtickets() {
  //  this.viewtickets = true
  //  this.viewticketsassignment = false
  //  var data = JSON.parse(localStorage.getItem('employee'));
  //  this.username = data.username;

  //  this.employeeservice.adminticketview(this.username).subscribe(response => {
  //    console.log(this.username)
  //    console.log(response);
  //    this.adticketsview = response;
  //  }, error => {
  //    console.log(error);
  //  })
  //}

  ticketack(dataItem) {
    this.modeladmin = dataItem.id;
    console.log(this.modeladmin);
    this.employeeservice.adminticketack(this.modeladmin).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })

  }

  ticketclose(dataItem) {
    this.modeladmin = dataItem.id;
    console.log(this.modeladmin);
    this.employeeservice.adminticketclose(this.modeladmin).subscribe(response => {
      console.log(response);
      this.viewtickets = false
      this.viewticketsassignment = false
    }, error => {
      console.log(error);
    })

  }

  ticketdelete(dataItem) {
    this.admindelete = dataItem.id;
    console.log(this.admindelete);
    this.employeeservice.adminticketdelete(this.admindelete).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })

  }


  home() {
    this.viewtickets = false
    this.viewticketsassignment = false
  }



}
