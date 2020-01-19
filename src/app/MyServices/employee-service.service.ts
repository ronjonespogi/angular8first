import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  getEmployeeData()
  {
    return [
      {name: 'Rausch Lobiano', age: 31, gender: 'Male'},
      {name: 'Gina Fe Lobiano', age: 32, gender: 'Female'},
      {name: 'Raigin May Lobiano', age: 5, gender: 'Female'},
      {name: 'Rausch Lobiano Jr.', age: 2, gender: 'Male'},
      {name: 'Ron Christian Lobiano', age: 0, gender: 'Male'}
    ];
  }
}
