import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddLeaveTypeComponent } from './LeaveTypes/add-leave-type/add-leave-type.component';
import { ViewLeaveTypesComponent } from './LeaveTypes/view-leave-types/view-leave-types.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';
import { LoginServicesService } from './Services/Login/login-services.service';

import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from './Services/User/user.service';
import { RoleService } from './Services/Role/role.service';
import { DepartmentService } from './Services/Department/department.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddLeaveTypeComponent,
    ViewLeaveTypesComponent,
    AddDepartmentComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [UserService, RoleService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
