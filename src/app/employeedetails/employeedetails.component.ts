import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../MyServices/employee-service.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  public emps = [];
  constructor(private _empAkto: EmployeeServiceService) { }

  ngOnInit() {
    this.emps = this._empAkto.getEmployeeData();
  }

}
