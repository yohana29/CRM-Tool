import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../_services/customer.service';
import { EmployeeService } from '../_services/employee.service';
import { ToastrService } from 'ngx-toastr'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cutomerService: CustomerService, private employeeService: EmployeeService, private toastr: ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.cutomerService.currentCustomer$.pipe(
      map(user => {
        if (user) return true;
        this.toastr.error('You need to sign-in')
      })
    )

  }
  
}
