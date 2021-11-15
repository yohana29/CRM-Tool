import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { Admin } from '../_model/admin';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'https://localhost:44317/api/';
  private currentEmployeeSource = new ReplaySubject<Admin>(1);
  currentEmployee$ = this.currentEmployeeSource.asObservable();


  constructor(private http: HttpClient) { }

  login(employee: any) {
    return this.http.post(this.baseUrl + 'EmployeeUserAccounts/Employeelogin', employee).pipe(
      map((response: Admin) => {
        const employee = response;
        if (employee) {
          localStorage.setItem('employee', JSON.stringify(employee));
          this.currentEmployeeSource.next(employee);
        }

      })
    )
  }

  setCurrentEmployee(employee: Admin) {
    this.currentEmployeeSource.next(employee);
  }

  logout() {
    localStorage.removeItem('employee');
    this.currentEmployeeSource.next(null);
  }

  adminticketview(username:any) {
    return this.http.get(this.baseUrl + 'TicketAssignment/' + username)
  }

  adminticketack(modeladmin: any) {
    return this.http.put(this.baseUrl + 'EmployeeUserAccounts/TicketStatusAck', {}, { params: { id: modeladmin } })
  }


}
