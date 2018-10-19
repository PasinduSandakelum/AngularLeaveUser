import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from 'src/app/Model/role.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private urlRole = 'http://localhost:8080/hrm_system/role';
  constructor(private http: HttpClient) { }

  public getAllRoles() {
    return this.http.get<Role[]>(this.urlRole);
  }
}
