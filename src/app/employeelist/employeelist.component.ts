import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../MyServices/employee-service.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public employees=[];
  constructor(private _empService: EmployeeServiceService) { }

  ngOnInit() {
    this.employees = this._empService.getEmployeeData();
  }

}
