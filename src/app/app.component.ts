import { Component } from '@angular/core';
import { Department } from './Model/department.model';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // department: Department = new Department();
    title: String;

    constructor() {
        // this.department.id = 1;
        // this.department.departmentName = 'HR';
        // console.log(this.department);
        this.title = 'Leave Management System';
    }
}
