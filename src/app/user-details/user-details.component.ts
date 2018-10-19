import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User.model';
import { UserService } from '../Services/User/user.service';
import { RoleService } from '../Services/Role/role.service';
import { Role } from '../Model/role.model';
import { DepartmentService } from '../Services/Department/department.service';
import { Department } from '../Model/department.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  dt;
  public user: User;
  public roles: Role[];
  public depts: Department[];
  public users: User[];
  constructor(private userService: UserService,
    private roleSerivice: RoleService, private departmentService: DepartmentService) {
  }

  ngOnInit() {
    this.dt = new Date();
    this.user = new User();

    this.user.id = 1;
    this.user.userName = 'pasindu';
    this.user.password = '123123';
    this.user.firstName = 'pasindu';
    this.user.lastName = 'kalum';
    this.user.email = 'example@gmail.com';
    this.user.joinDate = '2018-10-09';
    this.user.servicePeriod = 5;
    this.user.roleId = 2;
    this.user.departmentId = 1;
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      // console.log(this.users);
    });
    this.roleSerivice.getAllRoles().subscribe(role => {
      this.roles = role;
      // console.log(role);
    });
    this.departmentService.getAllDepartment().subscribe(department => {
      this.depts = department;
    });
  }

  public setJoinDate(joinDate) {
    this.user.joinDate = joinDate;
  }
}
