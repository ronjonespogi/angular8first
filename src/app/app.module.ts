import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeServiceService } from './MyServices/employee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    EmployeelistComponent,
    EmployeedetailsComponent
  ],
  imports: [
    NgbModule,BrowserModule,FormsModule
    
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
