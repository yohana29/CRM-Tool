import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { Customer } from '../_model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'https://localhost:44317/api/';
  private currentCustomerSource = new ReplaySubject<Customer>(1);
  currentCustomer$ = this.currentCustomerSource.asObservable();

  constructor(private http: HttpClient) { }

  login(customer: any) {
    return this.http.post(this.baseUrl + 'EmployeeUserAccounts/Customerlogin', customer).pipe(
      map((response: Customer) => {
        const customer = response;
        if (customer) {
          localStorage.setItem('customer', JSON.stringify(customer));
          this.currentCustomerSource.next(customer);
        }

      })
    )
  }

  setCurrentCustomer(customer: Customer) {
    this.currentCustomerSource.next(customer);
  }

  logout() {
    localStorage.removeItem('customer');
    this.currentCustomerSource.next(null);
  }

  register(modelregister:any) {
    return this.http.post(this.baseUrl + 'EmployeeUserAccounts/CustomerRegister', modelregister)
  }

  createticket(modelnewticket: any) {
    return this.http.post(this.baseUrl + 'EmployeeUserAccounts/TicketRegister', modelnewticket)
  }

  customerticketview(custid: any) {
    return this.http.get(this.baseUrl + 'Ticket/' + custid)
  }


}

