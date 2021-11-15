import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent implements OnInit {
  modelregister: any = {}
  @Output() cancelcustomerRegister = new EventEmitter();
  constructor(public customerservice: CustomerService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.customerservice.register(this.modelregister).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.toastr.error(error.error)
    })
  }

  cancel() {
    this.cancelcustomerRegister.emit(false);
  }

}
