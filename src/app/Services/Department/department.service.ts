import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from 'src/app/Model/department.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  private urlDepartment = 'http://localhost:8080/hrm_system/department';

  public getAllDepartment() {
    return this.http.get<Department[]>(this.urlDepartment);
  }
}
